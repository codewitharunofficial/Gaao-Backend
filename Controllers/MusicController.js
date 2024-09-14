import KaraokeModel from "../Models/KaraokeModel.js";
import cloudinary from "../Utilities/cloudinary.js";

export const uploadMusic = async (req, res) => {
  try {
    const { title, artists, karaokeBy, lyrics, genre } = req.fields;
    const { trackFile, coverPhoto } = req.files;

    switch (true) {
      case !title:
        throw new Error("Title is Required");
      case !artists:
        throw new Error("Artists Name Cannot Be Empty");
      //   case !karaokeBy:
      //     throw new Error("Field Karaoke-By Cannot Be Empty");
      case !trackFile:
        throw new Error("Karaoke Track is Required");
    }

    const karaoke = await cloudinary.uploader.upload(trackFile.path, {
      public_id: `${title}_by_Arun`,
      resource_type: "auto",
    });

    if (coverPhoto) {
      const photo = await cloudinary.uploader.upload(coverPhoto.path, {
        public_id: `${title}_cover_photo`,
        resource_type: "image",
      });

      const music = new KaraokeModel({
        title: title,
        artists: artists,
        lyrics: lyrics,
        karaokeBy: karaokeBy,
        karaokeCoverPhoto: photo,
        track: karaoke,
        genre: genre ? genre : "Bollywood",
      }).save();

      res.status(200).send({
        success: true,
        message: "Track Uploaded Successfully",
        karaokeTrack: music,
      });
    } else {
      const music = new KaraokeModel({
        title: title,
        artists: artists,
        lyrics: lyrics,
        karaokeBy: karaokeBy,
        track: karaoke,
        genre: genre ? genre : "Bollywood",
      }).save();

      res.status(200).send({
        success: true,
        message: "Track Uploaded Successfully",
        karaokeTrack: music,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Oops! Something went wrong",
      error: error,
    });
    console.log(error);
  }
};

// For Fetching All Karaoke Tracks

export const getKaraokeTracks = async (req, res) => {
  try {
    const tracks = await KaraokeModel.find({});
    if (tracks.length > 0) {
      res.status(200).send({
        success: true,
        message: `${tracks.length} results found`,
        tracks: tracks,
      });
    } else {
      res.status(201).send({
        success: true,
        message: `No Tracks Found`,
        tracks: tracks,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: `Oops! Something went wrong`,
      error: error.message,
    });
  }
};



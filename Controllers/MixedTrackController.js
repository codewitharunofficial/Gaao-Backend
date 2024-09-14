export const publishTrack = async (req, res) => {
    try {
        const {name, userId, title} = req.fields;
        const {track} = req.files;

    } catch (error) {
        console.error(error);
    }
}
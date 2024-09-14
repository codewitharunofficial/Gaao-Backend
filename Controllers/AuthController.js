import UserModel from "../Models/UserModel.js";

export const registerNewUser = async (req, res) => {
    try {
        const {name, email, photoUrl} = req.body;
        if(email && name && photoUrl){

            const ifExist = await UserModel.findOne({email: email});

            if(ifExist){
                res.status(300).send({
                    success: false, 
                    message: "An Account with this email already exists",
                })
            } else{
                const user = new UserModel({name, email, profilePic: photoUrl});
                await user.save();
    
                if(user){
                    res.status(200).send({
                        success: true,
                        message: "Registration Successful",
                        user
                    });
                }
            }

        } else {
            throw new Error("All Fields are required");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong while registering..!!",
            error
        })
    }
}

export const login = async (req, res) => {
    try {
        const {email} = req.body;
        console.log(email);

        if(!email){
            throw new Error("Email is required");
        } else {
            const user = await UserModel.findOne({email});

            if(user){
                res.status(200).send({
                    success: true,
                    message: "You Logged In Successfully",
                    user
                })
            } else {
                res.status(401).send({
                    success: false,
                    message: "Email Isn't Registered",
                })
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}
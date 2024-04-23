import jws from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jws.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: '20d' }
    );
    res.cookie("jwt", token, { httpOnly: true, sameSite: "strict",  maxAge: 15*24*60*60*1000, secure: process.env.NODE_ENV !== "production" });
};

export default generateTokenAndSetCookie;
const verifyAdmin = (req, res, next) => {
    try {
        const user = req.user;
        if (user && user.role === 'customer') {
            return res.status(400).json({success: false, message: 'Access Denied - Admin Only'})
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export default verifyAdmin
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Helmet
import { Helmet } from 'react-helmet';

const Profile = () => {
    const navigate = useNavigate();

    const [emailVal, setEmailVal] = useState('');

    const auth = getAuth();

    onAuthStateChanged(auth, authUser => {
        if(!authUser) return navigate("/");

        setEmailVal(authUser.email);
    })

    return (
        <div>
            <Helmet>
                <title> Gyumri Brand Shop | Profile </title>
            </Helmet>

            <div className="flex justify-center title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-b from-purple-200 to-white h-[200px]">
                Welcome {emailVal}
            </div>
        </div>
    )
};

export default Profile;

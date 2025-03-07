export default function UserProfilePage({params}: any) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-2xl p-8 space-y-6 bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-center text-white text-2xl">
                    <h1>Profile</h1>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div>
                            <h2 className="text-xl text-white">{params?.id}</h2>
                            <h2 className="text-xl text-white">John Doe</h2>
                            <p className="text-gray-400">johndoe@example.com</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg text-white">Bio</h3>
                        <p className="text-gray-300">
                            Full-stack developer with a passion for building beautiful and functional web applications.
                        </p>
                    </div>
                    <button 
                        className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

// import { authConfig } from "@/configs/auth"
// import { getServerSession } from "next-auth/next"
// import Image from "next/image"

// export default async function Profile() {
//   const session = await getServerSession(authConfig)

//   return (
//     <main className="overflow-hidden mt-20">
//       <h1>Profile of {session?.user?.name}</h1>
//       <p>{session?.user?.email}</p>
//       {session?.user?.image && 
//         <img 
//           className="w-40 h-40" 
//           src={`${session.user.image}`}
//           alt="" 
//           />
//       }
//     </main>
    
//   )
// }
'use client'
import { useEffect, useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const userProfile = localStorage.getItem('credentials');
    if (userProfile) {
      setProfile(JSON.parse(userProfile));
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {/* {profile && (
        <div>
          <p>Email: {profile.email}</p>
        </div>
      )} */}
    </div>
  );
}
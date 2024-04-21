'use client'

import { JobCard } from "@/components"
import { JobProps } from "@/types"
import { useEffect, useState } from "react"

export default function Liked() {
  const [favoriteJobs, setFavoriteJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoriteJobs(favorites);
  }, []);

  const removeFromFavorites = (idToRemove:JobProps) => {
    const updatedFavorites = favoriteJobs.filter((job) => job.id !== idToRemove.id);
    setFavoriteJobs(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="mt-20 max-width">
      <h1 className="flex justify-center py-10 text-3xl font-bold">Liked Storage</h1>

      <div className="mt-12 flex flex-col gap-5">
        {favoriteJobs.map((job) => (
          <JobCard key={job.id} job={job}/>
        ))}
      </div>
    </div>
  )
}
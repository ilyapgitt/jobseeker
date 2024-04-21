import { fetchVacancies } from "@/utils";
import { JobsList } from "@/components";


export default async function JobsPage() {
  const allVacancies = await fetchVacancies()
  const isDataEmpty = !Array.isArray(allVacancies) || allVacancies.length < 1;

  return (
    <main className="overflow-hidden mt-10">
      <JobsList isDataEmpty={isDataEmpty} allVacancies={allVacancies} />
    </main>
  )

}
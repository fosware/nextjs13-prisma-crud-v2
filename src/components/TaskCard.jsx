"use client";
import { useRouter}  from 'next/navigation'

function TaskCard({ task }) {
	const router = useRouter();
  return (
    <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer"
		onClick={ () => {
			router.push('/tasks/edit/' + task.id);
		} }
	>
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p className="p-2">{task.description}</p>
      <p className="pt-5 text-xs text-slate-100">
        {new Date(task.createdAt).toLocaleString()}
      </p>
    </div>
  );
}

export default TaskCard;

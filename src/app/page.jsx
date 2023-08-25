import {prisma} from '@/libs/prisma';
import TaskCard from '@/components/TaskCard';

async function loadTask() {
  //--- enfoque consulta  a la BD
  const tasks = await prisma.task.findMany();
  
  //--- enfoque peticion HTTP
  // const res = await fetch('http://localhost:3000/api/tasks');
  // const tasks = await res.json(); 
  
  return(tasks);
}

// actualiza cada 60 seg
//export const revalidate = 60;

//actualiza cada modificacion
export const dynamic = 'force-dynamic';

async function HomePage() {
  const tasks = await loadTask();

  return (
   <section className="container mx-auto">
     <div className="grid grid-cols-3 gap-3 mt-10">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />         
      ))}
    </div>
   </section>
  )
}

export default HomePage;

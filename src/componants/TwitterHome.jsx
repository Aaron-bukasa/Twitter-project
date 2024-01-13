import Sidebar from './Sidebar';
import Timeline from './Timeline';
import Aside from './Aside';

export default function TwitterHome() {

  return (
   <div id='container'>
      <Sidebar />
      <Timeline />
      <Aside />
   </div>
  )
}
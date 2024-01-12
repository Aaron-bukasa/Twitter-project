import Timeline from './componants/Timeline';
import './App.css';
import Sidebar from './componants/Sidebar';
import Aside from './componants/Aside';

export default function App() {

  return (
   <div id='container'>
      <Sidebar />
      <Timeline />
      <Aside />
   </div>
  )
}
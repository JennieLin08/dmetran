import Image from 'next/image'
import styles from './page.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import ItemList from '../app/itemList/page.tsx';
import Navbar from '../app/navbar/page';

export default function Home() {
  return (
    <>
    <Navbar />
      {/* <ItemList />  */}
    </>
  )
}

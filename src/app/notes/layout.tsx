import Sidebar from '../../components/Sidebar';
import Search from '../../components/Search';
import Footer from '../../components/Footer';

 const HomeLayout=({children,}: {children: React.ReactNode}) =>{
    return (
        <div className="md:flex gap-x-4 bg-[--primary-color] p-4">
          <Sidebar />
          <div className="flex-1 min-h-screen rounded-lg">
            <Search />
            <main className="my-4">{children}</main>
            <Footer />
          </div>
      </div>
    )
  }
  export default HomeLayout;
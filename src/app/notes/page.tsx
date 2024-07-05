import React from 'react'
import NotesCard from './../../components/NotesCard';

const page = () => {
  return (
    <div className="min-h-screen bg-white p-4 font-montserrat rounded-lg">
      <h1 className="pb-4 font-semibold text-lg">
        All Notes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
    </div>
  )
}

export default page;
import React from 'react'
import LayOut from '../../Component/LayOut'

export const About: React.FC = (): React.ReactElement => {
  return (
    <section>
      <LayOut>
        <div className="h-[57vh] flex justify-center items-center my-1 text-xl w-full">
          <div>
            <h1 className="font-bold">Note:</h1>
            <h1>
              Website ini dibuat hanya untuk contoh dengan tanpa adanya desain
              yang menarik data Gambar yang ditampilkan diambil dari internet
            </h1>
          </div>
        </div>
      </LayOut>
    </section>
  )
}

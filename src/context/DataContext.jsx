import React, { createContext, useState } from "react";

export const DataContext = createContext();

const data1 = [
    {
        sport: "Futbol",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
        nombre: "Lionel Messi",
        numero: "10",
        information: "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team."
    },
    {
        sport: "Basketball",
        imagen: "https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg",
        nombre: "Michael Jordan",
        numero: "23",
        information: 'Michael Jeffrey Jordan, also known by his initials MJ, is an American former professional basketball player and businessman. The official National Basketball Association website states: "By acclamation, Michael Jordan is the greatest basketball player of all time.'
    },
    {
        sport: "Baseball",
        imagen: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk4NTY1NzQ5NzA5NjEyOTY3/usatsi_20862734_168388303_lowres.jpg",
        nombre: "Shohei Ohtani",
        numero: "17",
        information: `Shohei Ohtani, nicknamed "Shotime", is a Japanese professional baseball pitcher and designated hitter for the Los Angeles Angels of Major League Baseball. He previously played for the Hokkaido Nippon-Ham Fighters of Nippon Professional Baseball's Pacific League`
    },
    {
        sport: "Tennis",
        imagen: "https://cdn.britannica.com/36/223036-050-9CF5317C/Novak-Djokovic-trophy-US-Open-singles-match-2018.jpg",
        nombre: "Novak Djokovic",
        numero: "",
        information: "LNovak Djokovic is a Serbian professional tennis player who is currently ranked world No. 2 in singles by the Association of Tennis Professionals."
    },
]

export const DataProvider = ({ children }) => {

    const [datacard1, setDatacard1] = useState(data1)
    return (
        <DataContext.Provider value={{
            datacard1,
            setDatacard1
        }}>
            {children}
        </DataContext.Provider>
    )
}
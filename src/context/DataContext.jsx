import React, { createContext, useState } from "react";

export const DataContext = createContext();

const data1 = [
    {
        sport: "Football",
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

const Categorias = ["Equipo", "Motor", "Mesa"]

const data2 = [
    {
        image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Match%20report.jpg?auto=webp&itok=ftEQK4f7",
        name: "Football",
        description: "Football, or soccer in North America, is a team sport with 11 players on each side. The goal is to score by getting the ball into the opponent's net using any part of the body except hands and arms.",
        category: Categorias[0],
        teamorplayer: "Manchester City",
        teamorplayerinfo: "https://www.mancity.com/",
    },
    {
        image: "https://cdn.nba.com/teams/uploads/sites/1610612753/2023/07/paoloceltics2_2400_20230727.jpg",
        name: "Basketball",
        description: "Basketball, often called hoops, is a fast-paced team sport on a rectangular court. Teams aim to score by shooting a ball into the opponent's hoop, with five players on each side. The team with more points wins.",
        category: Categorias[0],
        teamorplayer: "Lakers",
        teamorplayerinfo: "https://www.nba.com/lakers",
    },
    {
        image: "https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_md_2x/f_auto/v1536936974/primary/exvzqcvorticinejmmel",
        name: "Voleiball",
        description: "Volleyball, a team sport with six players per team, scores by sending the ball over the net into the opponent's court, aiming to make it touch the ground within their playing area, following specific rules.",
        category: Categorias[0],
        teamorplayer: "Zenit Kazan",
        teamorplayerinfo: "https://zenit-kazan.com/eng/team/zenit/players/",
    },
    {
        image: "https://hips.hearstapps.com/hmg-prod/images/charles-leclerc-of-monaco-driving-the-ferrari-f1-75-on-news-photo-1653759186.jpg?crop=0.941xw:0.820xh;0.0572xw,0.0887xh&resize=1200:*",
        name: "Formula 1",
        description: `Formula 1, often abbreviated as F1, is premier motorsport with high-speed, open-wheel racing. It's prestigious and technologically advanced. Teams and drivers compete in Grand Prix races on various circuits, including tracks, streets, and road courses `,
        category: Categorias[1],
        teamorplayer: "RedBull",
        teamorplayerinfo: "https://www.redbullracing.com/int-en",
    },
    {
        image: "https://rxi.iscdn.net/2023/07/271965_viallealignmediamx23spring-creek042.jpg",
        name: "Motocross",
        description: "Motocross, an exciting motorsport, features off-road racing on dirt tracks. Skilled riders on powerful, lightweight motorcycles tackle challenging courses with jumps, turns, and obstacles.",
        category: Categorias[1],
        teamorplayer: "RedBull KTM",
        teamorplayerinfo: "https://www.ktm.com/es-co/racing.html",
    },
    {
        image: "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2021-08/nascar-phoenix-051220-getty-ftrjpg_jugcv1cq6unt19ta8g1p0vl27.jpg?itok=I2yrf43p",
        name: "Nascar",
        description: 'NASCAR, which stands for the National Association for Stock Car Auto Racing, is a popular motorsport organization primarily based in the United States. It is known for its unique style of racing, characterized by oval-shaped tracks and stock car vehicles.',
        category: Categorias[1],
        teamorplayer: "Hendrick Motorsports",
        teamorplayerinfo: "https://www.hendrickmotorsports.com/",
    },
    {
        image: "https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-2a5d8b2206e74c67d7b1b94c3576ace7cd32bb65.jpg",
        name: "Chess",
        description: "Chess is a timeless and intricate board game that engages two players in a battle of wits and strategy. Set on a square board divided into 64 squares of alternating colors, chess is a game of grand strategy and tactical cunning.",
        category: Categorias[2],
        teamorplayer: "Magnus Carlsen",
        teamorplayerinfo: "https://en.wikipedia.org/wiki/Magnus_Carlsen",
    },
    {
        image: "https://images.sportsnhobbies.org/domino-combination.jpg",
        name: "Dominoes",
        description: "Dominoes, a classic board game with rectangular tiles, involves matching numbered dots to eliminate tiles and block opponents while playing.",
        category: Categorias[2],
        teamorplayer: "Björn Andreas",
        teamorplayerinfo: "https://www.dominospiel.de/es/campeonatos/campeonato-mundial.html#:~:text=%C2%A1Bj%C3%B6rn%20Andreas%20Wolst%20es%20el%20Campe%C3%B3n%20Mundial%20de%20Domin%C3%B3%202022!&text=El%20defensor%20del%20t%C3%ADtulo%20y,por%20detr%C3%A1s%2C%20en%2017%C2%AA%20posici%C3%B3n.",
    },
    {
        image: "https://images.sportsbrief.com/images/1120/ac7db94b3941d8cb.jpeg?v=1",
        name: "Billiards",
        description: " Billiards is a precise cue sport played on a rectangular table with pockets. Players use a cue stick to skillfully pocket numbered and colored balls, combining strategy and finesse.",
        category: Categorias[2],
        teamorplayer: "Jeanette Lee",
        teamorplayerinfo: "https://en.wikipedia.org/wiki/Jeanette_Lee",
    },
]

export const DataProvider = ({ children }) => {

    const [datacard1, setDatacard1] = useState(data1)

    const [datacard2, setDatacard2] = useState(data2)
    return (
        <DataContext.Provider value={{
            datacard1,
            setDatacard1,
            datacard2,
            setDatacard2,
            Categorias
        }}>
            {children}
        </DataContext.Provider>
    )
}
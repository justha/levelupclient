import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider"
import { GameList } from "./game/GameList"
import { EventProvider } from "./event/EventProvider"    
import { EventList } from "./event/EventList"    


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views
        </main>

        <GameProvider>
            <Route exact path="/games">
                <GameList />
            </Route>
        </GameProvider>

        <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
        </EventProvider>

    </>
}
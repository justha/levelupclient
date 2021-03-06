import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import "./Event.css"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h1>Level Up Events</h1>
            </header>
            {
                events.map(event => {
                    return <article className="container__card">
                        <section key={event.id} className="registration">
                            <div className="registration__game">{event.game.title}</div>
                            <div>{event.description}</div>
                            <div>
                                {new Date(event.date).toLocaleDateString("en-US",
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })
                                }
                                @ {event.time}
                            </div>
                        </section>
                    </article>
                })
            }
        </article >
    )
}
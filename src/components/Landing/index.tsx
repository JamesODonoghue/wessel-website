
import React from 'react';
import photo from '../../photo-main.png';
import Feed from '../Feed';

function Landing() {
    return (
        <div>
            <section className="section-landing">
                <div className="main-image">
                    <img alt="beth-profile" src={photo} style={{ width: '50%', height: 'auto' }}></img>
                </div>
                <div className="main-content__body" style={{ maxWidth: '600px' }}>
                    <h2>Hi. I'm Beth. </h2>
                    <p>
                        Beth is serving her 6th term in the Iowa House of Representatives.
                        She is Ranking member of the Human Resources Committee. She also
                        serves on the Public Safety and Environmental Protection
                        committees, and the Health and Human Services Appropriations
                        Subcommittee.
            </p>
                    <p>
                        Beth is married to Tom Kroeschell. He is the program director for
                        CycloneTV. They have two children, Liza and Robbie.
            </p>
                    <p>
                        Beth was born and raised in Ames. Following graduation from Ames
                        High, she earned her BA from the University of Northern Iowa, and
                        her MPA from Iowa State University.
            </p>
                    <p>
                        Beth is a former high school English teacher and has done
                        substantial work in non-profit administration. She was on the
                        board of ACCESS, a battered women’s shelter, for four years and
                        served as their president. She was chair of the Story County Equal
                        Rights Amendment campaign in 1992. Beth has also served on her
                        church council in various capacities, served on the Planned
                        Parenthood Community Council in 1994, and worked for the Iowa
                        Farmers Union and the Association of Boards of Certification.
            </p>
                </div>

            </section>
            <Feed/>
        </div>

    )
}

export default Landing
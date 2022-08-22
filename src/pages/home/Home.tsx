import {FC, useMemo} from 'react';

import {MainSlider} from '@components/sliders';
import {FilmCard} from "@components/films";

type HomeProps = {};

export const Home: FC<HomeProps> = () => {
    const images = {
        slider: useMemo(() => [
            {
                id: 12512,
                backdrop_path:
                    'https://i.picsum.photos/id/909/850/350.jpg?hmac=RalYKAiI2wU-udpvM7jLFNjjxxZt2pjPYTvZwFnPNKQ',
                title: 'The Crown'
            },
            {
                id: 512,
                backdrop_path:
                    'https://i.picsum.photos/id/408/850/350.jpg?hmac=bTKeWBeP4HmJAZuJIN6qvB1vr0ZRgeexcRqzmFg55GM',
                title: 'Marvel'
            },
            {
                id: 52512,
                backdrop_path:
                    'https://i.picsum.photos/id/671/850/350.jpg?hmac=QuIyjiGrrxRm3RThzxa4tbElIl6QoGaqi5Kd9GqRnsI',
                title: 'Spider'
            }
        ], []),
        films: useMemo(() => [
            {
                id: 12142512,
                poster_path:
                    'https://i.picsum.photos/id/67/250/300.jpg?hmac=0IqGSgLmsFPx05ncUwlZkK37_0oksWuPJ-jzv-Bq86c',
                title: 'The Crown',
                vote_average: 9
            },
            {
                id: 5521512,
                poster_path:
                    'https://i.picsum.photos/id/165/250/300.jpg?hmac=MqVymKUEjlrWNOEy3DL0as1tMWo2MIRZPaNxtoJrUOc',
                title: 'Marvel',
                vote_average:1
            },
            {
                id: 5251122512,
                poster_path:
                    'https://i.picsum.photos/id/650/250/300.jpg?hmac=yGcO8xCH4hacnZmbq2edPgzblRvgKoMl6h9Ak73_ttI',
                title: 'Spider',
                vote_average: 1
            }
        ], []),
    };
    return (
        <div>
            <MainSlider items={images.slider}/>
            <FilmCard item={images.films[0]}/>
        </div>
    );
};

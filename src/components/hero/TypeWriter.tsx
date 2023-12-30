"use client"

import {TypeAnimation} from "react-type-animation";

interface TypeWriterProps extends React.HTMLAttributes<HTMLDivElement> {

    sequences: string[];

}

export default function TypeWriter({sequences, ...rest}: TypeWriterProps) {

    return (
        <div {...rest}>
            <TypeAnimation
                sequence={[
                    ...sequences.map((sequence, index) => [
                        sequence,
                        index % 2 === 0 ? 5000 : 1000,
                    ]).flat(),
                ]}
                speed={1}
                repeat={Infinity}
            />
        </div>
    )
}
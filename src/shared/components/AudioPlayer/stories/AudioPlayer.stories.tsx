import React from "react";
import { Story } from "@storybook/react";
import { demoContent } from '../demoContent/demoContent';
import AudioPlayer,{ AudioPlayerProps } from "../containers/AudioPlayer";

export default  {
    title: "AudioPlayer",
    component: AudioPlayer
}

const Template:Story<AudioPlayerProps> =(args) =>(
    <AudioPlayer {...args} />
)

export const MyAudioPlayer = Template.bind({})
MyAudioPlayer.args = {
    audioItems: demoContent
}
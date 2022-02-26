import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
const OlineClass = () => {
  useEffect(() => {
    const config = {
      name: "Demo User",
      meetingId: "milkyway",
      apiKey: "<API KEY>",

      containerId: null,

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,

      /*

     Other Feature Properties
      
      */
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);
  return (
    <div>
      <h2>Online class </h2>
    </div>
  );
};

export default OlineClass;

export const CURRENT_CONFIG = {
  // license
  appId: '129593', // You need to go to the development website to apply.
  appKey: '7e86d80ca2b0721e8a55de9ef7d4ed0', // You need to go to the development website to apply.
  appLicense:
    'f0ESwBWbrtNzol4Dyf7Cd9LsTsZdMdwyK84tTaKCzC4OZSW75FmpDy0ab+jEaX8D2RIuunVazpMoyJj4u1VJYRKdEqKexGqJigR4LmvxtJtQEynHUfPbanTYlZCucK6VaaGCV8entr3duYpSxiZxmHxLkDh1Hyp/iRpKI8lMqRo=', // You need to go to the development website to apply.

  // http
  baseURL: 'http://121.41.28.44:6789/', // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: 'ws://121.41.28.44:6789/api/v1/ws', // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: 'rtmp://121.41.28.44/live/', // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: '121.41.28.44',
  gbServerPort: '15060',
  gbServerId: '34020000002000000001',
  gbAgentId: '34020000002000000001',
  gbPassword: '12345678',
  gbAgentPort: '7060',
  gbAgentChannel: '34020000002000000001',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: '325b122512262cb431ea15348a1a0bf6',
}

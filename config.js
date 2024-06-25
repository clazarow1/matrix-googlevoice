module.exports = {

   // Following MUST be edited:
   matrixBotId: '@clazarow2:beeper.com', // The user ID of the account you set up to use as the bot
   matrixBotAccessToken: "syt_Y2xhemFyb3cy_HsCloLdTIiBPDtcdajBb_2S0UC5", // Instructions at https://t2bot.io/docs/access_tokens/
   gmailId: 'clazarow1@gmail.com', // Your Gmail ID
   gmailPw: 'xinh bckr odxb teye', // Use an App Password, see https://support.google.com/accounts/answer/185833
   matrixYourIds: ['@clazarow1:beeper.com'], // Array of users to invite to new rooms created by the bot. Can be on any server.

   // Following are set up for use with a bot account at matrix.org. Edit if using another server.
   matrixServerUrl: `https://matrix.beeper.com`,
   matrixDomain: 'beeper.com',

   // Following are optional
   matrixBotName: 'Google Voice Bot',
   roomAvatarURL: 'mxc://matrix.org/ShLVOQjbDdUbugMrjhSaBaoB', // Avatar for all new GV bridged rooms
   backDays: 0, // Days back to search for messages in Gmail. Mark messages as Unread if you want the bot to see them.
   logging: true, // Log to console?

   // Following are tweaks for the IMAP client; see https://github.com/mscdex/node-imap
   imapKeepalive: {
      interval: 60 * 1000, // interval (in ms) at which NOOPs are sent and the interval at which idleInterval is checked. Default 10000
      idleInterval: 5 * 60 * 1000, // interval (in ms) at which an IDLE command (for servers that support IDLE) is re-sent. Default 300000 (5 mins)
      forceNoop: true // Set to true to force use of NOOP keepalive on servers also support IDLE. Default false
   },
   imapLogging: true, // Log IMAP events to console?
   imapNoopLogging: false, // Log IMAP NOOP to console?
   aliasSuffix: '' // NOT WORKING, leave blank for now (optional string to append to all room aliases, effectively creating all new rooms)
}

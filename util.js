'use strict';

var defaultProtocolPorts = {
  "acap": 674,
  "afp": 548,
  "dict": 2628,
  "dns": 53,
  "file": null,
  "ftp": 21,
  "git": 9418,
  "gopher": 70,
  "http": 80,
  "https": 443,
  "imap": 143,
  "ipp": 631,
  "ipps": 631,
  "irc": 194,
  "ircs": 6697,
  "ldap": 389,
  "ldaps": 636,
  "mms": 1755,
  "msrp": 2855,
  "msrps": null,
  "mtqp": 1038,
  "nfs": 111,
  "nntp": 119,
  "nntps": 563,
  "pop": 110,
  "prospero": 1525,
  "redis": 6379,
  "rsync": 873,
  "rtsp": 554,
  "rtsps": 322,
  "rtspu": 5005,
  "sftp": 22,
  "smb": 445,
  "snmp": 161,
  "ssh": 22,
  "steam": null,
  "svn": 3690,
  "telnet": 23,
  "ventrilo": 3784,
  "vnc": 5900,
  "wais": 210,
  "ws": 80,
  "wss": 443,
  "xmpp": null,
}

module.exports = {
  isString: function (arg) {
    return typeof arg === 'string';
  },
  isObject: function (arg) {
    return typeof arg === 'object' && arg !== null;
  },
  isNull: function (arg) {
    return arg === null;
  },
  isNullOrUndefined: function (arg) {
    return arg == null;
  },
  getPortFromProtocol: function(protocol) {
    return defaultProtocolPorts[protocol.slice(0, -1)];
  },
};

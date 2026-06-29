export const PS2CD_WEB_CONFIG = {
  defaultMedia: 'cd',
  defaultOutputBaseName: 'ps2cd',
  requireSystemCnf: true,
  bootLogo: {
    enabled: true,
    virtualPath: 'boot.bmp',
    candidates: [
      'boot.bmp'
    ],
    blackClamp: 0
  },
  order: {
    rootFiles: [
      'ps2cd.order',
      'ps2iml.order'
    ],
    candidates: [
      'assets/ps2cd.order',
      'assets/ps2iml.order'
    ],
    fallback: [
      'SYSTEM.CNF',
      'IOPRP300.IMG',
      'MODULES/',
      'DATA/'
    ]
  }
};

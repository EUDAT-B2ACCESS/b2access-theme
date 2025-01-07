# B2ACCESS Theme

Subset of configurations and customizations on Unity IdM installation for b2access.eudat.eu

### What's in here

- Landing page (and homepage) template
- about-page
- acceptable-use-policy

### What's **not** in here
- Imprint/Impressum
- Data privacy statement

## Installation

1. Clone this repository into `unity-4.x.x./webContents` with `git clone https://github.com/EUDAT-B2ACCESS/b2access-theme.git b2access` 
so your directory structure looks like this:
```
webContents/
├── assets/
├── favicon.html
├── b2access/
│   ├── README.md
    **this project**
├── styles.css
└── templates/

```

2. Swap assets (e.g logo, favicon, etc.) under `webContents/assets`
3. Put missing files like `impressum.html` and `data-privacy-statement.html` in `webContents/b2access/files/`
4. Change permissions `chown -R unity:unity webContents`
5. Set up the following unity settings in `conf/modules/core/userhome.properties` for the home endpoint:
```
unity.endpoint.web.customCssFileName=b2access/b2access-home.css
unity.endpoint.web.extraTopPanel=b2access/b2access-topbar.html
unity.endpoint.web.extraBottomPanel=b2access/b2access-bottombar.html

```

6. `conf/modules/core/upman.properties` for the upman-endpoint:
```
unity.endpoint.web.customCssFileName=b2access/b2access-home.css
unity.endpoint.web.extraTopPanel=b2access/b2access-topbar.html
unity.endpoint.web.extraBottomPanel=b2access/b2access-bottombar.html
```

Note: You can put off the extra panels prevents header and footer to show AFTER login
with `unity.endpoint.web.addExtraPanelsAfterAuthentication=false`


# Kuknos Extension SDK

Kuknos extension is a wallet on Kuknos Network.

You can use the sdk to do and short some operation without sharing secret key to any third party applications.

You have just install the SDK and use functions. Users of your application has to installed the Kuknos browser extension on their browser.

<b>Install Kuknos browser extension with below link:</b>

[Firefox Kuknos Extension](https://addons.mozilla.org/en-GB/firefox/addon/kuknos-wallet/)

[Chrome Kuknos Extension](https://chrome.google.com/webstore/detail/kuknos-wallet/piddfmmaocogbhnfgmgnkdliffakmjfp)


# Installation
Using npm:

```npm i kuknos-extension-sdk```

Using yarn:

```yarn add kuknos-extension-sdk```

# Use
First import it like below:

```
import KuknosIntent from 'kuknos-extension-sdk';
```

You can set the network: [default is ``public``]
```
KuknosIntent.setNetwork('public');
```

example method for ``payment``:

```
KuknosIntent.payment({
     amount: 0.0001,
     destination:'GARTVC5KJUEBPXSNDKFXBPK7U5QZJCBEJMWQ66HE7AHFSDYWB6TG5N6C',
     asset_code: 'PMN',
     memo: 'memo text'
   })
   .then((result) => {
     console.log(result);
    
   }).catch((err) => {
     console.log(err);
   });
```

# Document
You can find all methods in [Docs](https://docs.kuknos.ir/)

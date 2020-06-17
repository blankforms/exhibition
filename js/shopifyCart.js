/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'blank-forms.myshopify.com',
      storefrontAccessToken: 'a4fdb1932e117a2365528c6f4febf128',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('cart', {
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        },
      },
      "button": {
        "font-size": "13px",
        "width": "120px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "12px",
        "padding-right": "12px",
        "position": "relative",
        "left": "80px",
        "right": "0px",
        "bottom": "0px",
        "margin": "0 auto",
        "background-color": "#ffffff",
        "border": "1px solid #C7302C",
        "color": "#c7302c",
        ":hover": {
        "background-color": "#C7302C",
        "color": "#fff"
        },
        ":disabled": {
        "background-color": "#ece9e9",
        "color": "#c7302c"
        },
        },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "ADD TO CART",
      "outOfStock": "SOLD OUT"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
      },
      "height": "200px",
      "positions": "relative",
      },
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#c7302c",
        ":hover": {
          "color": "#c7302c",
          "background-color": "#d4d2d2"
        },
        "background-color": "#ece9e9",
        ":focus": {
          "background-color": "#d4d2d2"
        },
        "border-radius": "2px",
        "padding-left": "14px",
        "padding-right": "14px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        "color": "#c7302c",
        ":hover": {
          "color": "#c7302c",
          "background-color": "#d4d2d2"
        },
        "background-color": "#ece9e9",
        ":focus": {
          "background-color": "#d4d2d2"
        },
        "border-radius": "2px"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "header": {
        "color": "#4c4c4c"
      },
      "lineItems": {
        "color": "#4c4c4c"
      },
      "subtotalText": {
        "color": "#4c4c4c"
      },
      "subtotal": {
        "color": "#4c4c4c"
      },
      "notice": {
        "color": "#4c4c4c"
      },
      "currency": {
        "color": "#4c4c4c"
      },
      "close": {
        "color": "#4c4c4c",
        ":hover": {
          "color": "#4c4c4c"
        }
      },
      "empty": {
        "color": "#4c4c4c"
      },
      "noteDescription": {
        "color": "#4c4c4c"
      },
      "discountText": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "discountAmount": {
        "color": "#4c4c4c"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#ece9e9",
        ":hover": {
          "background-color": "#d4d2d2"
        },
        ":focus": {
          "background-color": "#d4d2d2"
        }
      },
      "count": {
        "font-size": "13px",
        "color": "#c7302c",
        ":hover": {
          "color": "#c7302c"
        }
      },
      "iconPath": {
        "fill": "#c7302c"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#4c4c4c"
      },
      "title": {
        "color": "#4c4c4c"
      },
      "price": {
        "color": "#4c4c4c"
      },
      "fullPrice": {
        "color": "#4c4c4c"
      },
      "discount": {
        "color": "#4c4c4c"
      },
      "discountIcon": {
        "fill": "#4c4c4c"
      },
      "quantity": {
        "color": "#4c4c4c"
      },
      "quantityIncrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityDecrement": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      },
      "quantityInput": {
        "color": "#4c4c4c",
        "border-color": "#4c4c4c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

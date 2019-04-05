# GramCoinApp
## Prerequisites:

* Xcode
* React Native CLI
* An IDE of your choosing

##Install:
1) Clone project and `cd GramCoinApp`.
2) Run `yarn` or `npm install`.
3) Run `react-native link` to link dependencies.
4) Run `react-native run-ios` to view on a simulator

##App Flow
The GramCoin home screen offers our dear grandma three selections of alt coins to see the prices of: LiteCoin, DogeCoin, and Monero.
Pressing on any of those buttons will make a fetch request to the CoinCap API for the selected currency. The currency will be displayed (in BTC)
as well. An option will also be offered to allow grandma to see the price of the selected currency within the last 30 minutes.

Once grandma has decided that she wants to view the price history, another fetch request will be made to the CoinCap API to get 
prices for the selected currency from the Kraken market in the last 30 minutes. These prices will be ordered by time (least recent to most recent). 
Prices are displayed in BTC and the highest and lowest prices are highlighted.

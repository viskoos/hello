import PicturesStore from "./model_stores/PicturesStore";
import FavoritesStore from "./model_stores/FavoritesStore";
import SearchPageStore from "./ui_stores/SearchPageStore";
import FavoritesPageStore from "./ui_stores/FavoritesPageStore";
import UnsplashClient from "../services/unsplash/UnsplashClient";
import LocalStorageClient from "../services/local_storage/LocalStorageClient";
import DetailsPageStore from "./ui_stores/DetailsPageStore";
import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "09465ee0b43bf274a0c67732a9a8f75faad53b2495ee077947cf0fca6a68bfe5"
});

const unsplashClient = UnsplashClient(unsplash);
const localStorage = LocalStorageClient(window.localStorage);

class RootStore {
  constructor() {
    this.favoritesStore = new FavoritesStore(this);
    this.picturesStore = new PicturesStore(this);
    this.searchPageStore = new SearchPageStore(
      this,
      unsplashClient,
      localStorage
    );
    this.favoritesPageStore = new FavoritesPageStore(this, null, localStorage);
    this.detailsPageStore = new DetailsPageStore(this, null, localStorage);
  }
}

export default RootStore;

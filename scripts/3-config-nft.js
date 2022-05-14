import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5b0c876e169F9E08bc4BaBE806eE19fb85058fd7");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Coffee Bean",
        description: "This NFT will give you access to CoffeeDAO!",
        image: readFileSync("scripts/assets/coffee-bean.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
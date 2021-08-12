document.addEventListener("DOMContentLoaded", function() {
    let apContainer = document.createElement("div");
    apContainer.id = "aplayer";
    document.body.append(apContainer);
    const ap = new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true,
      audio: [
        {
          name: "所念皆是星河",
          artist: "artist",
          url: "/url.mp3",
          cover: "/images/music1.png",
        }, {
          name: "奇妙能力歌-陈粒",
          artist: "artist",
          url: "/陈粒 - 奇妙能力歌.mp3",
          cover: "/images/bg18.png",
        }
        , {
          name: "火羊瞌睡了 - 夏天的风",
          artist: "artist",
          url: "/火羊瞌睡了 - 夏天的风.mp3",
          cover: "/images/夏天的风.jpeg",
        } , {
          name: " Perfect",
          artist: "artist",
          url: "/丁芙妮 - Perfect (翻自 Ed Sheeran).mp3",
          cover: "/images/bg_7.jpg",
        }, {
          name: " Taylor Swift - Love Story",
          artist: "artist",
          url: "/Taylor Swift - Love Story.ncm",
          cover: "/images/dark_1.jpg",
        }
      ],
    });
  });
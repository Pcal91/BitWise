function myFunction(x) {
    var image;
    if (x == 0)
        image = "media/Aatrox_0.jpg";
    else if (x == 1)
        image = "media/Gangplank_0.jpg";
    else if (x == 2)
        image = "media/Ryze_0.jpg";
    else if (x == 3)
        image = "media/Zed_0.jpg";
    else if (x == 4)
        image = "media/Vladimir_0.jpg";
    else if (x == 5)
        image = "media/Lucian_0.jpg";
    else if (x == 6)
        image = "media/Taric_0.jpg";
    else if (x == 7)
        image = "media/Janna_0.jpg";
    else if (x == 8)
        image = "media/Trundle_0.jpg";
    else if (x == 9)
        image = "media/Ivern_0.jpg";
    document.getElementById("image").src = image;
}
        var word = "бутылок";
        var count = 99;

        while (count > 0) {
            console.log(count + " " + word + " пива на стене");
            console.log(count + " " + word + " пива,");
            console.log("Возьми одну, пусти по кругу,");
            count = count - 1;

            if (count > 0) {
                console.log(count + " " + word + " пива на стене");
            } else {
                console.log("Нет больше " + word + " пива на стене");
            }

        }

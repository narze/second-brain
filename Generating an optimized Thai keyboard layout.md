---
title: "Generating an optimized Thai keyboard layout"
---

I built a new [Thai keyboard layout][1] called [Manoonchai](https://manoonchai.com)

# Toward a more useful Thai keyboard layout

All of the Thai keyboard layouts are created in the typewriter era. I wanted to create a new one sometime ago since I moved from [Kedmanee](https://en.wikipedia.org/wiki/Thai_Kedmanee_keyboard_layout) (Thai's QWERTY) to [Pattachote](https://en.wikipedia.org/wiki/Thai_Pattachote_keyboard_layout). The problems of the two layouts is they're not optimized for modern keyboards, and even some of the characters are dead eg. `ฃ`, `ฅ`, `ฦ`, `๏`. Moreover, Thai numbers are seldomly used in normal situations, hence forcing users to switch to English layout to type numbers or use the numpad. Lastly, I want the layout I created to be keyboard form factor agnostic. I can use [40% Keyboard](https://duckduckgo.com/?q=40%25+keyboard&atb=v226-1&iax=images&ia=images) with both Kedmanee & Pattachote, but still think that it can be better.

Apparently there is a new layout called [IKBAEB](https://gitlab.com/sahabandha/ikbaeb-th) which resonates all of the ideas, but I want to use modern Thai corpus as a dataset and then generate the layout somehow. Maybe it will yield the same result, but this way I will have an excuse to learn [Rust](https://www.rust-lang.org/).

For the name of the layout, I will use [my family name](https://github.com/manoonchai/manoonchai) for now.

## Plans

-   Learn minimum Rust to process Thai language corpus.
-   Generate n-grams from corpus.
-   Create typing effort model from n-grams, similar to [Carpalx](http://mkweb.bcgsc.ca/carpalx/?typing_effort).
-   Discover & measure new layout with lower effort from the model.

## Preparation

Since I'll use [Rust][2] for this project and I'm relatively new to this language, I'll start from gathering the corpus from various sources and find out the most frequently used keys are. The code is simple, just scanning all the words from the source, count, then sort it like [this](https://gist.github.com/narze/9a3b71757bd3915387397b2bbaa8e0c8). The data is not quite useful, but it gives the idea which keys should be in the home row.

## Typing Effort Model

Next, I've planned to create the typing effort model similar to [Carpalx][3]. But the finger travel distance will be altered a bit to suit my use on [40% Keyboard][4]. When I got the model working I'll train with the text from all the sources, including my chat logs.

## Triads

I get some Thai corpus data (eg. [Wisesight][5], [Wongnai][6]) then generate the triads to see which 3-character substrings are being used the most ([Code][7]). The triads will be [one of the parameters][8] to calculate the typing effort.

Here are the sample triads I got from the corpus.

### Wongnai : Top 30

```
 ้าน : 134642
 ร้า : 119805
 ที่ : 118052
 ไม่ : 102900
 ่อย : 82040
 ได้ : 73344
 นี้ : 72915
 มาก : 69226
 เป็ : 66661
 แต่ : 66436
 ป็น : 62878
 เลย : 62262
 ว่า : 59965
 ค่ะ : 57345
 ข้า : 53751
 ั่ง : 51812
 รับ : 51245
 ร่อ : 50937
 อร่ : 50575
 นนี : 48245
 หาร : 44594
 ครั : 44076
 าหา : 43952
 และ : 43314
 อาห : 43283
 ื่อ : 41649
 ให้ : 41496
 น้ำ : 40458
 ทาน : 40247
 ่าง : 38617
```

### Wisesight : Top 30
```
 ที่ : 10920
 ไม่ : 10329
 ได้ : 7626
 555 : 6047
 รับ : 5944
 ว่า : 5886
 นี้ : 5704
 การ : 5318
 ื่อ : 5292
 ให้ : 4747
 ล้ว : 4504
 เป็ : 4498
 ครั : 4400
 แล้ : 4359
 ป็น : 4331
 เลย : 4298
 ้อง : 4186
 กิน : 3957
 แต่ : 3957
 กัน : 3939
 ของ : 3727
 และ : 3341
 มาก : 3283
 วัน : 3231
 ค่ะ : 3181
 กับ : 3085
 ประ : 3003
 ่าง : 2989
 ั้ง : 2978
 ้าง : 2968
```

Some of the words are on the both list although the context are not the same (Restaurant reviews VS Social media messages.)

The rest can be read on my [Medium](https://medium.com/@narze)

[1]: /toward-a-more-useful-thai-keyboard-layout
[2]: https://www.rust-lang.org
[3]: http://mkweb.bcgsc.ca/carpalx/?typing_effort
[4]: /40-percent-keyboard
[5]: https://github.com/PyThaiNLP/wisesight-sentiment
[6]: https://github.com/wongnai/wongnai-corpus
[7]: https://github.com/narze/Manoonchai/tree/main/analyzer
[8]: http://mkweb.bcgsc.ca/carpalx/?typing_effort#triads
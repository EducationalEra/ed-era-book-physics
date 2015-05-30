# <p1>Тригонометричні функції</p1>
----

Тригонометричні функції – функції, що залежать від кута і пов'язують між собою кути трикутника та довжини його сторін. Вони мають широкий спектр застосувань у математиці і, відповідно, в областях науки, де математика застосовується для опису різних явищ та процесів. 

Безпосередньо у фізиці тригонометрія використовується для представлення векторів у різних системах координат і моделюванні періодичних процесів (звукових хвиль, елоктромагнітних коливань, зміни середньої температури протягом року тощо).

Сучасна наука використовує 6 базових тригонометричних функцій: *sin, cos, tg, ctg, sec, csc*; через перші дві виражаються всі інші.


Для визначення тригонометричних функцій кута $$\alpha$$ потрібно взяти **прямокутний** трикутник, що містить цей кут $$\alpha$$. Сторони трикутника матимуть наступні назви:

* <p1>Гіпотенуза</p1> –  сторона [прямокутного] трикутника, що лежить навпроти його прямого кута. Вона завжди є найдовшою зі сторін трикутника.
* <p1>Прилеглий катет</p1> – сторона, що лежить між прямим кутом і кутом $$\alpha$$
* <p1>Протилеглий катет</p1> – сторона, що лежить навпроти кута $$\alpha$$

<img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/trigonometry/1.svg" />

Тепер у нас є все необхідне для означення основних тригонометричних функій. 

* <p><p1>Синус кута</p1> – це відношення довжини протилеглого катета до довжини гіпотенузи. В нашому випадку: </p>
<center>
$$sin(\alpha) =  \dfrac{\color{#D0021B}п{\color{#D0021B}р\color{#D0021B}о\color{#D0021B}т\color{#D0021B}и\color{#D0021B}л\color{#D0021B}е\color{#D0021B}г\color{#D0021B}л\color{#D0021B}и\color{#D0021B}й} \thinspace {\color{#D0021B} к\color{#D0021B}а\color{#D0021B}т\color{#D0021B}е\color{#D0021B}т}}{\color{#4A90E2}г\color{#4A90E2}і\color{#4A90E2}п\color{#4A90E2}о\color{#4A90E2}т\color{#4A90E2}е\color{#4A90E2}н\color{#4A90E2}у\color{#4A90E2}з\color{#4A90E2}а} = \dfrac{\color{#D0021B}b}{\color{#4A90E2}h}$$ </center>
* <p><p1>Косинус кута</p1> – це відношення довжини прилеглого катета до довжини гіпотенузи:</p>
    <center>$$cos(\alpha) = \dfrac{\color{#417505}п\color{#417505}р\color{#417505}и\color{#417505}л\color{#417505}е\color{#417505}г\color{#417505}л\color{#417505}и\color{#417505}й \thinspace \color{#417505}к\color{#417505}а\color{#417505}т\color{#417505}е\color{#417505}т}{\color{#4A90E2}г\color{#4A90E2}і\color{#4A90E2}п\color{#4A90E2}о\color{#4A90E2}т\color{#4A90E2}е\color{#4A90E2}н\color{#4A90E2}у\color{#4A90E2}з\color{#4A90E2}а}=\dfrac{\color{#417505}a}{\color{#4A90E2}h}$$</center>

* <p><p1>Тангенс кута</p1> – це відношення довжини протилеглого катета до довжини прилеглого катета:</p>
    <p><center>$$tg(\alpha)=\dfrac{\color{#D0021B}п{\color{#D0021B}р\color{#D0021B}о\color{#D0021B}т\color{#D0021B}и\color{#D0021B}л\color{#D0021B}е\color{#D0021B}г\color{#D0021B}л\color{#D0021B}и\color{#D0021B}й} \thinspace {\color{#D0021B} к\color{#D0021B}а\color{#D0021B}т\color{#D0021B}е\color{#D0021B}т}}{\color{#417505}п\color{#417505}р\color{#417505}и\color{#417505}л\color{#417505}е\color{#417505}г\color{#417505}л\color{#417505}и\color{#417505}й \thinspace \color{#417505}к\color{#417505}а\color{#417505}т\color{#417505}е\color{#417505}т}=\dfrac{\color{#D0021B}b}{\color{#417505}a}$$</center></p>
    Розділивши чисельних і знаменник на довжину гіпотинузи, отмаємо:
    <center>$$tg(\alpha)=\dfrac{\color{#D0021B}b/ \color{#4A90E2}h}{\color{#417505}a/ \color{#4A90E2}h} = \dfrac{sin(\alpha)}{cos(\alpha)}$$</center>

Ще три основні тригонометричні функції є оберненими до попередніх:

* <p1>Катангенс кута</p1>:
    <center>$$ctg(\alpha) = \dfrac{1}{tg(\alpha)} = \dfrac{cos(\alpha)}{sin(\alpha)}$$</center>

* <p1>Секанс кута</p1>:
    <center>$$sec(\alpha) = \dfrac{1}{sin(\alpha)}$$</center>
* <p1>Косеканс кута</p1>:
    <center>$$csc(\alpha) = \dfrac{1}{cos(\alpha)}$$</center>

<p>Усі ці функції є періодичними, тобто повторюють свої значення при змінні кута на $$2\pi$$ (або, що те саме, на $$360^\circ$$)</p>
<p><center>$$sin(\alpha) = sin(\alpha \pm 2\pi k), \, k = \overline{1, 2, 3,...} $$</center></p>
Аналогічно й для *cos, tg, ctg, sec, csc*.

<img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/trigonometry/2.svg" />

Корисним також буде знання деяких тригонометричних співвідношень.


* <p>Наступне співвідношення випливає із теореми Піфагора:</p>
     <center>$$sin^2(\alpha) + cos^2(\alpha) = 1$$</center>

* <p>Формули для суми та різниці кутів:</p>
<p><center>$$sin(\alpha + \beta) = sin(\alpha)cos(\beta) + sin(\beta)cos(\alpha)$$ </center></p>
<p><center>$$sin(\alpha - \beta) = sin(\alpha)cos(\beta) - sin(\beta)cos(\alpha)$$</center></p>
<p><center>$$cos(\alpha + \beta) = cos(\alpha)cos(\beta) - sin(\alpha)sin(\beta)$$</center></p>
<p><center>$$cos(\alpha - \beta) = cos(\alpha)cos(\beta) + sin(\alpha)sin(\beta)$$</center></p>

Якщо кути $$\alpha$$ та $$\beta$$ рівні між собою, то формули суми/різниці спрощуються до формул подвійних кутів:
    








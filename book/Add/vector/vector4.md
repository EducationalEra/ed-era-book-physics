#<p1>Операції над векторами</p1>

Координатне представлення векторів дозволяє оперувати алгебраїчними методами замість геометричних. Над векторами можна виконувати багато алгебраїчних операцій: знаходити модуль, додавати і віднімати, множити або ділити на числа, множити між собою.

<h2><p1>Модуль вектора</p1></h2>

Як вже було зазначено модуль вектора $$\vec{AB} = \vec{a} \thinspace (a_1;a_2)$$ – це довжина відрізка $$AB$$, що позначається $$|\vec{AB_{ }}|=|\thinspace \vec{a} \thinspace|$$.


Модуль обчислюється за відомою формулою довжини відрізка:

$$|\thinspace \vec{AB} \thinspace|=\sqrt{(x_2-x_1 )^2+(y_2-y_1 )^2}.$$

Або ж через координати вектора:

$$|\thinspace \vec{a} \thinspace|=\sqrt{a_1^2+a_2^2}.$$

<h2><p1>Додавання векторів</p1></h2>

У координатному вигляді в результаті додавання векторів $$\vec{a} \thinspace (a_1;a_2)$$ та $$\vec{b} \thinspace (b_1;b_2)$$ отримаємо вектор $$\vec{c} \thinspace (c_1;c_2)$$, такий що:

$$c_1=a_1+b_1;$$

$$c_2=a_2+b_2.$$

Суму векторів записують як:

$$\vec{c} = \vec{a} + \vec{b}.$$

Іншими словами при додаванні векторів їхні відповідні <p1>координати додаються</p1>.

<div class="ebio-wrap">
<span class="ebio">Властивості операції додавання векторів</span>
<div class="ebio-text">
    <ul>
        <li>Комутативність: $$\vec{a} + \vec{b} = \vec{b} + \vec{a}$$.</li>
        <li>Асоціативність: $$(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$$.</li>
        <li>Додавання нульового вектора: $$\vec{a} + \vec{0} = \vec{a}$$.</li>
    </ul>
</div>
</div>


Для <p1>геометричної побудови</p1> вектора суми $$\vec{c} = \vec{a} + \vec{b}$$ використовують <p1>«правило трикутника»</p1> або <p1>«правило паралелограма»</p1>.

<div class="space"><p1>«Правило трикутника»</p1>: потрібно зробити паралельне перенесення одного з векторів так, щоб його початок співпадав з кінцем іншого. Вектор суми утворюватиме трикутник з двома векторами, він буде починатись у точці початку першого вектора і закінчуватись у точці кінця другого:</div>

<div class="space"><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/5.svg" /></div>

<div class="space">За цим правилом можна додавати багато векторів, для цього їх всі потрібно послідовно з’єднати. Результатом буде вектор, що починається у точці початку першого вектора, та закінчується у точці кінця останнього вектора:</div>

<div class="space"><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/6.svg" /></div>

<div class="space"><p1>«Правило паралелограма»</p1>: потрібно зробити паралельне перенесення одного з векторів так, щоб початки векторів співпали. На основі цих векторів будується паралелограм, а сумарний вектор буде співпадати з діагоналлю побудованого паралелограма і матиме початок в точці суміщення векторів:</div>

<div class="space"><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/7.svg" /></div>

Віднімання векторів $$\vec{a} - \vec{b}$$ еквівалентне додаванню протилежного вектора: $$\vec{a} + (-\vec{b})$$.

<h2><p1>Множення вектора на скаляр</p1></h2>

При множенні вектора $$\vec{a} \thinspace (a_1;a_2)$$ на скалярну величину $$\lambda$$, кожна координата вектора множиться на цей скаляр:

$$\lambda\vec{a} = (\lambda a_1;\lambda a_2).$$

<div class="ebio-wrap">
<span class="ebio">Властивості операції множення вектора на скаляр</span>
<div class="ebio-text">
    <ul>
        <li>Комутативність: $$\lambda\vec{a} = \vec{a}\lambda$$.</li>
        <li>Асоціативність: $$\lambda(\mu\vec{a}) = (\lambda\mu)\vec{a}$$.</li>
        <li>Дистрибутивність відносно додавання чисел: $$(\lambda + \mu)\vec{a} = \lambda\vec{a} + \mu\vec{a}$$</li>
        <li>Дистрибутивність відносно додавання векторів: $$\lambda(\vec{a} + \vec{b}) = \lambda\vec{a} + \lambda\vec{b}$$.</li>
    </ul>
</div>
</div>

З точки зору геометрїї при множенні довжина вектора збільшується в $$|\thinspace \lambda \thinspace|$$ разів:

$$|\thinspace \lambda\vec{a} \thinspace|=\sqrt{(\lambda a_1)^2 + (\lambda a_2)^2} = \sqrt{\lambda^2 (a_1^2+a_2^2)}=|\thinspace \lambda \thinspace|\sqrt{a_1^2+a_2^2} = |\thinspace \lambda \thinspace| \cdot |\thinspace \vec{a} \thinspace|$$

При цьому:
1. якщо $$\lambda > 0$$, то напрямок вектора зберігається;
2. якщо $$\lambda < 0$$, то напрямок вектора змінюється на протилежний:

<div class="space"><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/8.svg" /></div>

<h2><p1>Скалярний добуток векторів</p1></h2>

<div class="eoz-wrap">
<span class="eoz">Означення</span>
<div class="eoz-text">
<b>Скалярним добутком</b> двох векторів $$\vec{a} \thinspace (a_1;a_2)$$ та $$\vec{b} \thinspace (b_1;b_2)$$ називається <b>число</b> $$a_1 b_1+a_2 b_2$$. Скалярний добуток позначається $$\vec{a}\cdot\vec{b}$$ або $$(\vec{a},\vec{b})$$.
</div>
</div>

Скалярний добуток вектора самого на себе називається <b>скалярним квадратом</b>, який дорівнює квадрату довжини вектора:

$$(\vec{a},\vec{a}) = \vec{a}^2 = |\thinspace \vec{a} \thinspace|^2.$$

<div class="space"><div class="eoz-wrap">
<span class="eoz">Означення</span>
<div class="eoz-text">
<b>Скалярний добуток</b> також можна виразити як добуток довжин векторів та косинусу кута між цими векторами:

<div class="space">$$(\vec{a},\vec{b})=|\thinspace \vec{a} \thinspace| \cdot |\thinspace \vec{b} \thinspace| \cdot \cos{\varphi}$$</div>


<div class="space"><p align="center"><img src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/9.svg" /></p></div>

<p1>Зауваження</p1>: якщо вектори $$\vec{a}$$ та $$\vec{b}$$ не є нульовими і перпендикулярні, кут між ними $$\varphi = \dfrac{\pi}{2}$$ і $$\cos{\varphi} = \cos{\dfrac{\pi}{2}} = 0$$, то з вищенаведеного означення випливає, що <b>скалярний добуток перпендикулярних векторів рівний нулю</b>, і навпаки.
</div>
</div></div>

<div class="ebio-wrap">
<span class="ebio">Властивості скалярного добутку векторів</span>
<div class="ebio-text">
    <ul>
        <li>Комутативність: $$(\vec{a},\vec{b})=(\vec{b},\vec{a})$$.</li>
        <li>Асоціативність: $$\lambda(\vec{a}, \vec{b}) = (\lambda\vec{a},\vec{b}) = (\vec{a},\lambda\vec{b})$$.</li>
        <li>Дистрибутивність: $$(\vec{a} + \vec{b},\vec{c}) = (\vec{a},\vec{c}) + (\vec{b},\vec{c})$$.</li>
    </ul>
</div>
</div>

<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Знайдіть косинус кута між векторами $$\vec{a}(4;9)$$ і $$\vec{b}(-2;5)$$</p>
<answer>-0.7</answer>
<answer>-0.5</answer>
<answer>0</answer>
<answer>0.5</answer>
<answer correct>0.7</answer>
<explanation>
Косинус кута між векторами можна знайти через їх скалярний добуток.

\[ (\vec{a}, \vec{b}) = |\thinspace \vec{a} \thinspace| \cdot |\thinspace \vec{b} \thinspace| cos(\varphi) \]

Тобто, 

\[ cos(\varphi) = \dfrac{(\vec{a}, \vec{b})}{|\thinspace \vec{a} \thinspace| \cdot |\thinspace \vec{b} \thinspace|} \]

Скалярний добуток ми знаходи знаючи координати векторів:

\[ (\vec{a}, \vec{b}) = a_1 b_1 + a_2 b_2 \]

Отже, маємо:

\[ cos(\varphi) =  \dfrac{a_1 b_1 + a_2 b_2}{|\thinspace \vec{a} \thinspace| \cdot |\thinspace \vec{b} \thinspace|} = \dfrac{a_1 b_1 + a_2 b_2}{\sqrt{a_1 ^2 +a_2 ^2} \cdot \sqrt{b_1 ^2 + b_2 ^2}} = \dfrac{4 \cdot (-2) + 9\cdot 5}{\sqrt{4^2 + 9^2}\cdot \sqrt{(-2)^2 + 5^2}} = \dfrac{37}{53} \approx 0.7 \]
</explanation>
</question>
</quiz>

<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Чому дорівнює косинус кута між двома колінеарними векторами?</p>
<answer>0</answer>
<answer>1</answer>
<answer>-1</answer>
<answer correct>1 або -1</answer>
<answer>Недостатньо данних</answer>
<explanation>
Пригадайте означення колінеарності: вектори мають лежати на паралельних прямих. Тобто кут між ними буде 0 у випадку, коли вони співнапрямленні і 180$$^\circ$$, якщо вони протилежнонапрямлені. Відповідно косинус кута між колінеарними векторами буде або 1, або -1.
</explanation>
</question>
</quiz>


<h2><p1>Проекція та розкладання вектора на компоненти</p1></h2>

<p1>Одиничним</p1> називається вектор одиничної довжини.

<div class="space">Ті одиничні вектори, які співпадають з напрямками осей системи координат називають <p1>ортами</p1>.
Зазвичай орт, що має напрямок вздовж вісі $$Ox$$ позначають $$\vec{e_1}$$ (або $$\vec{i}$$), а вздовж вісі $$Oy$$ – відповідно $$\vec{e_2}$$ (або $$\vec{j}$$).
У координатному представленні їх можна записати: $$\vec{e_1} (1;0)$$ та $$\vec{e_2} (0;1)$$.</div>

<div class="space"><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/10.svg" /></div>

Візьмемо два вектора довільної довжини: $$\vec{a_1}$$, який напрямлений вздовж вісі $$Ox$$, а інший, $$\vec{a_2}$$ – вздовж $$Oy$$.
Запишемо сумарний вектор, який позначимо $$\vec{a}$$:

$$\vec{a_1} \thinspace (a_1;0) + \vec{a_2} \thinspace (0;a_2) = \vec{a} \thinspace (a_1;a_2).$$

У свою чергу, вектор $$\vec{a_1}$$ можна виразити через орт $$\vec{e_1}$$: вони мають однаковий напрямок і відрізняються лише довжиною:

$$\vec{a_1} \thinspace (a_1;0)=a_1 \vec{e_1} \thinspace (1;0).$$

Аналогічним чином:

<div class="space">$$\vec{a_2} \thinspace (0;a_2)=a_2 \vec{e_2} \thinspace (0;1).$$</div>

<div class="space"><img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/11.svg" /></div>

Підставивши ці вирази до виразу для вектора $$\vec{a}$$, отримуємо:

$$\vec{a} = a_1\vec{e_1} + a_2\vec{e_2}.$$

Легко помітити, що <p1>коефіцієнти при ортах – це координати вектора</p1>, або, як ще називають, <p1>проекції на осі координат</p1>. Виконана операція називається <p1>розкладанням вектора на проекції (компоненти)</p1>.

Узагальнивши вищенаведене: будь-який довільний вектор можна однозначно представити у вигляді <b>лінійної комбінації</b> двох інших відомих векторів:

<div class="space">$$\vec{c} = \lambda\vec{a} + \mu\vec{b}.$$</div>

<img class="image"  src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/Add/vector/12.svg" />


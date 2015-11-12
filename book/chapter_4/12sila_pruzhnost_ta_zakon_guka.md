# Сила пружностi та закон Гука

Якщо прикласти силу до якогось тiла, то воно <span class="p1"><b>деформується.</b></span>

<div class="eoz-wrap">
<span class="eoz">Означення</span>
<div class="eoz-text">
<div class="space"><span class="p1"><b>Деформацiя</b></span> – це змiна форми твердого тiла пiд дiєю зовнiшньої сили.</div>
<span class="p1"><b>Пружна деформацiя</b></span> – деформацiя, яка повнiстю зникає пiсля припинення дiї зовнiшньої сили. Форма тiла повертається у своє «звичне» положення.
</div>
</div>

<br>
<br>

<div class="space"><div class="fluidMedia">
<iframe width="560" height="315" src="https://www.youtube.com/embed/otU1LpSd224" frameborder="0" allowfullscreen></iframe>
</div></div>

<div class="eoz-wrap">
<span class="eoz">Означення</span>
<div class="eoz-text">
<span class="p1"><b>Сила пружностi $$\vec{F_П}$$</b></span> – сила, що виникає внаслiдок деформацiї тiла i напрямлена в протилежну сторону до напрямку, вздовж якого вiдбувається деформацiя.
</div>
</div>

<div class="space"><p class="p3">На рисунку зображено тверде тiло, яке розтягують з силою $$\vec{F_{}}$$. Виникає сила пружностi $$\vec{F_П}$$, яка противиться деформацiї тiла i намагається повернути його в «звичний» стан.</p></div>

<div class="space" align="center"><span class="p1"><b>Iнтуїтивно зрозумiлi наступнi моменти</b></span></div>
<ol>
<b><li>Чим бiльша початкова довжина $$l_0$$, тим легше видовжити тiло.</b>
<div class="space" align="center">$$\Delta l \sim l_0$$</div>
</li>
<b><li>Чим бiльша прикладена сила $$\vec{F_{}}$$, тим бiльше видовження тiла $$\Delta l$$.</b>
<div class="space" align="center">$$\Delta l \sim F$$</div>
</li>
<b><li>Чим бiльша площа перерiзу $$S$$, тим складнiше видовжити тiло.</b>
<div class="space" align="center">$$\Delta l \sim \dfrac{1}{S}$$</div>
</li>
</ol>

<div class="centered-table-wrapper">
<table class="centered-table">
<tr class="eq">
<td class="eq">
<p1><span class="p1">З усього вищезазначеного: $$\Delta l \sim \dfrac{F l_0}{S}$$</span></p1>
</td>
</tr>
</table></div>

<div class="space"><p class="p3">Перетворивши отримане відношення отримаємо $$\dfrac{F}{S} \sim \dfrac{\Delta l}{l_0}$$</p></div>

<div class="space"><p class="p3">Ми використали всi параметри, що пов’язанi з формою об’єкта. Залишилось для повної рiвностi використати параметр, який характеризує фiзичну властивiсть матерiалу створювати супротив деформацiї – модуль Юнга $$E \thinspace [ \thinspace \dfrac{Н}{м^2}$$ = Паскаль (Па) $$].$$</p></div>

<div class="space"><img class="image" width="489" height="45" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_4/19.png"></div>

<div class="space"><p class="p3">Тепер ми маємо все необхідне для запису фундаментального закону, який пов’язує силу пружностi з видовженням тiла:</p></div>

<div class="space"><img class="image" width="542" height="110" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_4/20.png"></div>

<div class="space">Закон Гука стверджує про пропорцiйнiсть мiж силою пружностi $$F_П$$, що виникає внаслiдок деформацiї i розтягу(стиску) тiла $$\Delta l$$. Чим бiльший коефiцiєнт жорсткостi $$k$$, тим швидше зi збiльшенням видовження зростає сила пружностi, яка намагається повернути тiло у свiй "звичний" стан. На рисунку $$k = tg\ \alpha$$.</div>

<div class="space"><img class="image" width="314" height="242" src="https://rawgit.com/chudaol/ed-era-book-physics/master/images/chapter_4/21.png"></div>

Слiд зауважити, що закон Гука в реальному життi виконується до <b>певної межi (межі пружності)</b> механiчної напруги. Пiсля цiєї межi тiло вже стає деформованим i не повертається у початковий стан. У школi не розглядається цей випадок.

<quiz correctLabel="correct!" incorrectLabel="incorrect!" checkLabel="check ansert">
<question>
<p>Як зміниться відносне видовження гумового шнурка, якщо його площу поперечного перерізу збільшити втричі?</p>
 
<answer correct>Зменшиться у 3 рази</answer>
<answer>Збільшиться у 9 раз</answer>
<answer>Зменшиться у 9 раз</answer>
<answer>Збільшиться у 3 рази</answer>
<explanation>
Сила пружності що виникає у шнурку: $$F = SE\dfrac{\Delta l}{l_0}$$
<br>
Таку ж силу прикладено до більш товстого шнурка: $$F = (3S)E\dfrac{\Delta l^\prime}{l_0}$$
<br>
Прирівнявши обидва вирази, отримуємо: $$SE\dfrac{\Delta l}{l_0} = $$$$3SE\dfrac{\Delta l^\prime}{l_0}$$
<br>
Звідки отримуємо співвідношення між видовженнями: $$\Delta l^\prime = \dfrac{1}{3} \Delta l$$
<br>
Оскільки початкова довжина $$l_0$$ залишається незмінною, то відносне видовження зменшиться у 3 рази.
</explanation>
</question>
</quiz>
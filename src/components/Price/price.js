

import cls from './price.module.css'

const Price = () => {
    return (
        <div className={cls.priceCart}>
            <h1>Цены на заказ</h1>
            <p>Цена зависит от размера вашего заказа , а также от бумаги и уровень трудности.Цены написанные ниже примерные</p>

            <section>
                <div><i>Баннер (кв2)</i> <span>1200c</span></div>
                <div><i>Визитка (1шт) </i><span>20c</span></div>
                <div><i>Пригласительное</i><span>20с</span></div>
                <div><i>Термопечать Футболка(1шт)</i><span>100c</span></div>
                <div><i>Термопечать  Кружка(1шт)</i><span>50c</span></div>
                <div><i>Меню</i><span>1200c</span></div>
                <div><i>Брошюрки</i><span>50с</span></div>
            </section>

        </div>
    )
}
export default Price
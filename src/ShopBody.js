import { FancyProduct } from "./FancyProduct";
import { SpecialSalePopularItem } from "./SpecialSalePopularItem";
export function ShopBody({state,setState}) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <FancyProduct price="$40.00 - $80.00"/>
          <SpecialSalePopularItem name="Special" price1="$20.00" price2="$18.00" state={state} setState={setState}/>
          <SpecialSalePopularItem name="Sale" price1="$50.00" price2="$25.00" state={state} setState={setState}/>
          <SpecialSalePopularItem name="Popular" price1="" price2="$40.00" state={state} setState={setState}/>
          <SpecialSalePopularItem name="Sale" price1="$50.00" price2="$25.00" state={state} setState={setState}/>
          <FancyProduct price="$120.00 - $280.00"/>
          <SpecialSalePopularItem name="Special" price1="$20.00" price2="$18.00" state={state} setState={setState}/>
          <SpecialSalePopularItem name="Popular" price1="" price2="$40.00" state={state} setState={setState}/>
        </div>
      </div>
    </section>
  );
}

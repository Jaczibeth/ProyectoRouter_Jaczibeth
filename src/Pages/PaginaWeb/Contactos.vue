<script >
import facebook from"C:/Users/jaczi/Documents/PaginaWebJaczibeth/src/assets/IMG/facebook.png"
import instagram from "C:/Users/jaczi/Documents/PaginaWebJaczibeth/src/assets/IMG/instagram.png"
import x from "C:/Users/jaczi/Documents/PaginaWebJaczibeth/src/assets/IMG/x.png"

export default{
    data(){
        return{
            facebook,instagram,x
        }
    }
};
</script>

<template>
     <footer id="acercade">
        <div class="footer">
            <div>
                <h3>Redes Sociales</h3>
                <div class="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100094324200093"><img width="20" height="20" :src="facebook" alt=""></a>
                    <a href="https://www.instagram.com/tectlaxiaco/?fbclid=IwY2xjawI59IxleHRuA2FlbQIxMAABHb7qtzORdkP2LZt5Y5WIe0X2MaSm8rmUuzgHPnSGcqt4D7RvKCofOSzeXQ_aem_cpiL2LEY_GSaLimwPfUxsA#"><img width="28" height="23" :src="instagram" alt=""></a>
                    <a href="https://x.com/TecNMTlaxiaco?fbclid=IwY2xjawI59JFleHRuA2FlbQIxMAABHWISnFYKNI2XUKAhlMYXIHTizlUJJYCgW4-2c45fwwzeupSkJxSnIzr1WQ_aem_nL-JwAwdMdeHFTRRe8xJgg"><img width="20" height="20" :src="x" alt=""></a>
                </div>
                
            </div>

            <div>
                <h3>Oaxaca</h3>
                <p>EDIFICIO CENTRO NUM2</p>
                <p>C.Centro</p>
                <p>68000, Oaxaca</p>
                <p>Tel: 951 235 16 94</p>
                <p>©aromasdeaquigroup.es</p>
            </div>

            <div>
                <h3>México</h3>
                <p>CD. México</p>
                <p>01000 México</p>
                <p>Tel: 552 125 45 47</p>
            </div>

            <div>
                <h3>Tlaxiaco</h3>
                <p>C. Centro</p>
                <p>Mercado Municipal, local-18</p>
                <p>Centro</p>
                <p>Tel: 953 230 55 26 </p>
            </div>
        </div>

        <div class="footer-bottom">
            ©aromasdeaquigroup.es - Aromas de aqui, cafe y reposteria - Todos los derechos reservados. 
            <a href="#">Aviso legal</a> | 
            <a href="#">Programacion Web</a> | 
            <a href="#">Sus datos seguros</a> | 
            <a href="#">Política de cookies</a> | 
            <a href="#">Protección de datos</a>
        </div>

        <a href="#" class="back-to-top">⬆</a>
    </footer>

</template>

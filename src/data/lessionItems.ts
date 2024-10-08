// Import Models
import { LessionContainerModel } from "@/models";

export const lessionItems = <LessionContainerModel[]>[
    {
        id: '1',
        title: '1. Estructura y Funciones del Cabello',
        content: [
            {
                id: '11',
                color: '#49BBBD',
                title: '1.1. Composición del Cabello',
                video: '<iframe width="100%" height="420" src="https://www.youtube.com/embed/1UtM_p_8M48?si=butvOrVNCYI9idm5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                content: [
                    "<p class='mb-6'>El cabello humano está compuesto principalmente por una proteína llamada queratina, la cual es la responsable de su estructura y resistencia. La queratina está formada por cadenas de aminoácidos que se unen entre sí mediante enlaces químicos, creando una estructura robusta y flexible.</p>",
                    "<p class='mb-6'>El cabello consta de tres capas principales:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Cutícula:</strong> Es la capa más externa del cabello y está formada por células planas y superpuestas que protegen las capas internas. Su función principal es proteger el cabello de daños externos y regular la absorción de agua.</li><li><strong>Corteza:</strong> Es la capa intermedia y constituye la mayor parte del cabello. Está compuesta por fibras de queratina y es responsable de la fuerza, elasticidad y color del cabello. La melanina, el pigmento que determina el color del cabello, se encuentra en la corteza.</li><li><strong>Médula:</strong> Es la capa más interna y menos densa del cabello. No todos los cabellos tienen médula y su función no está completamente clara, aunque se cree que puede estar relacionada con la estructura y la resistencia del cabello.</li></ul>",
                ],
                references: [
                    '<li>Robbins, C. R. (2012). Chemical and Physical Behavior of Human Hair (5th ed.). Springer.</li>',
                    '<li>Bouhanna, P. (2005). Hair: Science and Technique. Springer Science & Business Media.</li>',
                    '<li>Henson, C. (2009). The Science of Black Hair: A Comprehensive Guide to Textured Hair Care. Saja Publishing Company.</li>',
                ]
            },
            {
                id: '12',
                value: '2',
                color: '#F48C06',
                title: '1.2. Funciones del Cabello',
                video: '<iframe width="100%" height="420" src="https://www.youtube.com/embed/Y8DoD-2Ljsk?si=lWuQEGrbGxJYSVc-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                content: [
                    "<p class='mb-6'>El cabello no solo cumple una función estética, sino que también desempeña varias funciones importantes en el cuerpo humano. A continuación, se detallan las principales funciones del cabello:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Protección:</strong> El cabello protege el cuero cabelludo y la piel de la cabeza contra los daños causados por los rayos ultravioleta del sol, reduciendo el riesgo de quemaduras y daño celular. También ayuda a proteger contra el frío, actuando como una barrera térmica.</li><li><strong>Regulación de la Temperatura:</strong> El cabello ayuda a mantener la temperatura del cuerpo. En climas fríos, proporciona aislamiento al atrapar el calor cerca del cuero cabelludo. En climas cálidos, el cabello puede ayudar a mantener la cabeza fresca proporcionando sombra.</li><li><strong>Sensación Táctil:</strong> Los folículos pilosos están rodeados de terminaciones nerviosas que hacen que el cabello sea sensible al tacto. Esta sensibilidad ayuda a detectar pequeños cambios en el entorno, como la presencia de insectos o la sensación de viento.</li><li><strong>Filtración:</strong> El cabello en ciertas partes del cuerpo, como las pestañas y las cejas, actúa como un filtro que protege los ojos de partículas de polvo, sudor y otros desechos. Los vellos nasales también ayudan a filtrar el aire inhalado, atrapando partículas extrañas antes de que ingresen al sistema respiratorio.</li></ul>",
                ],
                references: [
                    '<li>Stenn, K. S., & Paus, R. (2001). Controls of hair follicle cycling. Physiological Reviews, 81(1), 449-494.</li>',
                    '<li>Proksch, E., Brandner, J. M., & Jensen, J. M. (2008). The skin: an indispensable barrier. Experimental Dermatology, 17(12), 1063-1072.</li>',
                ]
            },
            {
                id: '13',
                color: '#49BBBD',
                title: '1.3. Afecciones del Cabello',
                video: '<iframe width="100%" height="420" src="https://www.youtube.com/embed/61G8QYeK-FQ?si=CAkcHaqwnS5-yszX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                content: [
                    "<p class='mb-6'>El cabello puede verse afectado por una variedad de afecciones y trastornos que pueden influir en su salud, apariencia y crecimiento. A continuación se describen algunas de las afecciones del cabello más comunes:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Caspa:</strong> La caspa es una condición común caracterizada por la descamación del cuero cabelludo, que produce escamas blancas o amarillentas visibles en el cabello y los hombros. Puede estar asociada con la seborrea, un cuero cabelludo graso, o ser causada por el hongo <em>Malassezia</em>.</li><li><strong>Alopecia:</strong> La alopecia es la pérdida de cabello que puede ocurrir en el cuero cabelludo o en otras partes del cuerpo. Existen varios tipos de alopecia, incluyendo la alopecia androgenética (calvicie de patrón masculino o femenino), la alopecia areata (pérdida de cabello en parches) y la alopecia cicatricial (pérdida de cabello irreversible debido a daño en los folículos pilosos).</li><li><strong>Tricoptilosis (Puntas Abiertas):</strong> Esta condición ocurre cuando las puntas del cabello se dividen o se deshilachan, lo cual es común en cabellos dañados por el calor, productos químicos o manipulación excesiva. Las puntas abiertas pueden debilitar el cabello y hacer que se vea desordenado.</li><li><strong>Hirsutismo:</strong> El hirsutismo es el crecimiento excesivo de vello en mujeres en áreas donde normalmente los hombres tienen pelo grueso, como la cara, el pecho y la espalda. Esta condición puede estar relacionada con desequilibrios hormonales, como el síndrome de ovario poliquístico (SOP).</li><li><strong>Tricotilomanía:</strong> Es un trastorno compulsivo en el cual una persona se arranca su propio cabello de manera repetitiva, lo que puede llevar a parches de calvicie y daño en el cuero cabelludo.</li><li><strong>Dermatitis Seborreica:</strong> Esta es una inflamación crónica del cuero cabelludo que causa enrojecimiento, picazón y descamación. Puede estar relacionada con factores genéticos, hormonales y ambientales.</li></ul>",
                ],
                references: [
                    '<li>American Academy of Dermatology. (2023). Seborrheic dermatitis: Overview. Retrieved from https://www.aad.org</li>',
                    '<li>National Institute for Health and Care Excellence (NICE). (2018). Alopecia - androgenetic: Management. Retrieved from https://www.nice.org.uk</li>',
                    '<li>WebMD. (2023). Hair Damage and Repair: Tips and Tricks. Retrieved from https://www.webmd.com</li>',
                ]
                  
            }
        ]
    },
    {
        id: '2',
        title: '2. Aplicación de los Tintes Capilares',
        content: [
            {
                id: '21',
                color: '#F48C06',
                title: '2.1. ¿Qué son los Tintes Capilares?',
                images: [
                    { src: '5-min.jpg' }
                ],
                content: [
                    "<p class='mb-6'>Los tintes capilares son productos químicos o naturales utilizados para cambiar el color del cabello. Estos productos pueden ser aplicados para diversos fines, como cubrir canas, cambiar el color natural del cabello, seguir tendencias de moda o expresar la identidad personal.</p>",
                    "<p class='mb-6'>Existen diferentes tipos de tintes capilares según su composición y duración:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Tintes Temporales:</strong> Estos tintes cubren la superficie del cabello sin penetrar la cutícula y se eliminan con uno o dos lavados. Son ideales para cambios de color breves o para eventos especiales.</li><li><strong>Tintes Semi-permanentes:</strong> Penetran parcialmente la cutícula del cabello y duran entre 4 a 6 semanas, dependiendo de la frecuencia de lavado y la porosidad del cabello. No contienen amoníaco ni peróxido y se desvanecen gradualmente.</li><li><strong>Tintes Demi-permanentes:</strong> Contienen una pequeña cantidad de peróxido que permite una penetración más profunda en la cutícula del cabello. Duran entre 6 a 8 semanas y se desvanecen gradualmente. Son menos dañinos que los tintes permanentes y son útiles para añadir tonos o realzar el color natural.</li><li><strong>Tintes Permanentes:</strong> Penetran completamente la cutícula y el córtex del cabello, proporcionando un color duradero que solo se elimina con el crecimiento del cabello. Estos tintes suelen contener amoníaco y peróxido, lo que permite una transformación significativa del color. Son ideales para cubrir canas y realizar cambios de color drásticos.</li></ul>",
                    "<p class='mb-6'>El proceso de teñido del cabello puede variar dependiendo del tipo de tinte utilizado. Generalmente, incluye la aplicación del tinte sobre el cabello, dejando que actúe durante un tiempo específico y luego enjuagando para eliminar el exceso de producto.</p>",
                ],
                references: [
                    '<li>Healthline. (2023). Types of Hair Dye and Their Differences: Temporary, Semi-permanent, Demi-permanent, and Permanent. Retrieved from https://www.healthline.com</li>',
                ]
            },
            {
                id: '22',
                color: '#49BBBD',
                title: '2.2. Componentes de los Tintes Capilares',
                images: [
                    { 
                        title: 'Agentes Colorantes',
                        src: '9-min.png' 
                    },
                    { 
                        title: 'Amoníaco',
                        src: '10-min.jpg' 
                    },
                    { 
                        title: 'Peróxido de Hidrógeno',
                        src: '11-min.png' 
                    },
                    { 
                        title: 'Aromatizantes',
                        src: '12-min.jpg' 
                    },
                ],
                content: [
                    "<p class='mb-6'>Los tintes capilares están compuestos por una variedad de ingredientes que permiten la alteración del color del cabello. Estos componentes pueden variar según el tipo de tinte (temporal, semi-permanente, demi-permanente o permanente), pero en general, los tintes capilares contienen los siguientes ingredientes básicos:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Agentes Colorantes:</strong> Son los compuestos que proporcionan el color al cabello. En los tintes permanentes, los agentes colorantes suelen ser moléculas pequeñas que penetran la cutícula y reaccionan químicamente en el córtex del cabello para formar grandes moléculas de color. En los tintes semi-permanentes y temporales, los colorantes generalmente se depositan en la superficie del cabello.</li><li><strong>Amoníaco o Sustitutos del Amoníaco:</strong> El amoníaco es una sustancia alcalina que abre la cutícula del cabello, permitiendo que los agentes colorantes penetren en el córtex. En algunos tintes, el amoníaco se sustituye por otras sustancias alcalinas menos agresivas, como la etanolamina.</li><li><strong>Peróxido de Hidrógeno:</strong> El peróxido de hidrógeno se utiliza como agente oxidante que activa los agentes colorantes y ayuda a decolorar el pigmento natural del cabello. Esto es crucial en los tintes permanentes para lograr colores más claros o cambios de color drásticos.</li><li><strong>Agentes Humectantes:</strong> Estos ingredientes, como la glicerina, ayudan a retener la humedad en el cabello durante el proceso de teñido, evitando que se reseque demasiado.</li><li><strong>Estabilizadores:</strong> Los estabilizadores, como el ácido cítrico, se utilizan para mantener el pH del tinte dentro de un rango adecuado, asegurando que la coloración sea efectiva y duradera.</li><li><strong>Agentes Acondicionadores:</strong> Muchos tintes incluyen ingredientes acondicionadores, como siliconas y aceites, que ayudan a suavizar y proteger el cabello durante y después del proceso de teñido.</li><li><strong>Aromatizantes:</strong> Para enmascarar el olor fuerte del amoníaco y otros productos químicos, se añaden fragancias al tinte capilar.</li></ul>",
                    "<p class='mb-6'>El balance de estos componentes varía según la formulación del tinte y su propósito específico. Es crucial seguir las instrucciones del fabricante y, si es posible, realizar una prueba de alergia antes de usar cualquier tinte capilar, ya que algunos de estos ingredientes pueden causar reacciones alérgicas en personas sensibles.</p>",
                ],
                references: [
                    '<li>Healthline. (2023). What Are the Ingredients in Hair Dye?. Retrieved from https://www.healthline.com</li>',
                ]
            },
            {
                id: '23',
                color: '#F48C06',
                title: '2.3. Características de los Tintes Capilares',
                images: [
                    { src: '6-min.jpg' }
                ],
                content: [
                    "<p class='mb-6'>Los tintes capilares poseen una variedad de características que los diferencian según su composición, duración y efectos en el cabello. Estas características pueden influir en la elección del tipo de tinte según las necesidades y preferencias individuales. A continuación, se describen las principales características de los tintes capilares:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Duración:</strong> La durabilidad del color varía según el tipo de tinte. Los tintes temporales duran hasta el primer lavado, los semi-permanentes entre 4 a 6 semanas, los demi-permanentes entre 6 a 8 semanas, y los permanentes permanecen hasta que el cabello crece y se corta.</li><li><strong>Penetración en el Cabello:</strong> Los tintes temporales se adhieren a la superficie del cabello, mientras que los semi-permanentes y demi-permanentes penetran parcialmente la cutícula. Los tintes permanentes penetran profundamente en el córtex del cabello, permitiendo una transformación más duradera del color.</li><li><strong>Composición Química:</strong> Los tintes permanentes generalmente contienen amoníaco y peróxido de hidrógeno, que abren la cutícula del cabello y permiten la fijación del color. Los tintes semi-permanentes y demi-permanentes suelen ser menos agresivos, ya que no contienen amoníaco o lo hacen en menores cantidades.</li><li><strong>Impacto en la Salud del Cabello:</strong> Los tintes permanentes pueden causar más daño al cabello debido a los químicos fuertes que contienen. Los semi-permanentes y demi-permanentes son menos dañinos y suelen contener agentes acondicionadores para minimizar el daño. Los tintes temporales tienen el menor impacto en la salud del cabello.</li><li><strong>Proceso de Aplicación:</strong> Los tintes permanentes requieren un proceso de mezcla de componentes y una aplicación cuidadosa, mientras que los tintes semi-permanentes y temporales son generalmente más fáciles de aplicar y no requieren mezcla.</li></ul>",
                ],
                references: [
                    '<li>Vogue. (2022). A Complete Guide to Hair Dye Application at Home. Retrieved from https://www.vogue.com</li>',
                    '<li>Allure. (2023). How to Apply Hair Dye Like a Pro: Tips and Tricks. Retrieved from https://www.allure.com</li>',
                ]
            }
        ]
    },
    {
        id: '3',
        title: '3. Clasificación de los Tintes Capilares',
        content: [
            {
                id: '31',
                color: '#49BBBD',
                title: '3.1. Tintes Vegetales Comunes',
                video: '<iframe width="100%" height="420" src="https://www.youtube.com/embed/P2l9jmHNzMk?si=fa0liRtBpCyLSy6B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                content: [
                    "<p class='mb-6'>Los tintes vegetales son una opción natural para cambiar el color del cabello sin el uso de productos químicos agresivos. Estos tintes están hechos de extractos de plantas y otros ingredientes naturales, lo que los hace más suaves para el cabello y el cuero cabelludo. A continuación, se describen algunos de los tintes vegetales más comunes:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Henna:</strong> La henna es uno de los tintes vegetales más antiguos y populares. Se obtiene de las hojas secas y molidas de la planta <em>Lawsonia inermis</em>. La henna proporciona un color rojo anaranjado que puede variar en intensidad dependiendo del color natural del cabello. También fortalece y acondiciona el cabello.</li><li><strong>Indigo:</strong> El índigo, derivado de la planta <em>Indigofera tinctoria</em>, se utiliza a menudo junto con la henna para lograr tonos más oscuros, como el marrón y el negro. Por sí solo, el índigo puede proporcionar un color azul oscuro al cabello.</li><li><strong>Amla:</strong> El amla, o grosella espinosa india, no es un tinte en sí mismo, pero se utiliza como un aditivo en mezclas de henna e índigo para enriquecer el color y añadir brillo. El amla también es conocido por fortalecer el cabello y promover el crecimiento.</li><li><strong>Cassia:</strong> La cassia, también conocida como henna neutra o <em>Cassia obovata</em>, no cambia el color del cabello de manera significativa, pero puede proporcionar un ligero tono dorado en cabellos rubios o grises. Se utiliza principalmente para acondicionar y fortalecer el cabello.</li><li><strong>Manzanilla:</strong> La manzanilla se usa para aclarar el cabello de manera natural, especialmente en cabellos rubios o castaños claros. Las infusiones de manzanilla pueden proporcionar reflejos dorados y un brillo natural al cabello.</li><li><strong>Remolacha:</strong> El jugo de remolacha puede proporcionar tonos rojizos al cabello. Aunque no es tan duradero como la henna, es una opción natural para quienes buscan un cambio temporal.</li><li><strong>Café:</strong> El café puede utilizarse para oscurecer el cabello y proporcionar tonos marrones profundos. Es una opción popular para personas con cabello castaño que desean un color más oscuro y rico.</li><li><strong>Té Negro:</strong> Similar al café, el té negro se utiliza para oscurecer el cabello y añadir brillo. Es especialmente efectivo para cubrir canas y proporcionar un tono uniforme.</li></ul>",
                    "<p class='mb-6'>Los tintes vegetales son una alternativa más saludable a los tintes químicos, ya que no dañan el cabello y pueden incluso mejorar su salud y apariencia. Sin embargo, los resultados pueden variar dependiendo del color y la condición natural del cabello, y los tintes vegetales suelen ser menos permanentes que los tintes químicos.</p>"
                ],
                references: [
                    '<li>Green, J. (2020). The Benefits and Uses of Henna for Hair. Retrieved from https://www.healthline.com</li>',
                    '<li>Sato, Y. (2023). Cassia: A Natural Alternative for Hair Conditioning. Retrieved from https://www.naturalhealthmag.com</li>',
                    '<li>Pappas, A. (2023). Amla: The Indian Gooseberry and Its Benefits for Hair. Retrieved from https://www.verywellhealth.com</li>',
                ]
            },
            {
                id: '32',
                color: '#F48C06',
                title: '3.2. Propiedades de los Tintes Vegetales',
                images: [
                    { src: '4-min.png' }
                ],
                content: [
                    "<p class='mb-6'>Los tintes vegetales son una alternativa popular a los tintes químicos debido a sus beneficios naturales y a su menor impacto en la salud del cabello. A continuación, se describen algunas de las principales propiedades de los tintes vegetales:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Naturalidad:</strong> Los tintes vegetales están compuestos de ingredientes derivados de plantas, lo que los hace una opción más natural para colorear el cabello. No contienen productos químicos agresivos como el amoníaco o el peróxido de hidrógeno, que pueden dañar el cabello y el cuero cabelludo.</li><li><strong>Suavidad:</strong> Estos tintes son más suaves para el cabello y el cuero cabelludo. La mayoría de los tintes vegetales no penetran profundamente en el córtex del cabello, lo que reduce el riesgo de daño y de reacciones alérgicas.</li><li><strong>Acondicionamiento:</strong> Muchos tintes vegetales, como la henna, tienen propiedades acondicionadoras que pueden mejorar la salud del cabello. La henna, por ejemplo, recubre el cabello, proporcionando brillo y fortaleciéndolo.</li><li><strong>Seguridad:</strong> Al estar compuestos de ingredientes naturales, los tintes vegetales son generalmente seguros para personas con cuero cabelludo sensible o alergias a los tintes químicos. Sin embargo, siempre es recomendable realizar una prueba de alergia antes de su uso.</li><li><strong>Durabilidad:</strong> Aunque los tintes vegetales no son tan duraderos como los tintes permanentes, pueden proporcionar un color duradero dependiendo del tipo de cabello y la frecuencia de lavado. La henna, por ejemplo, puede durar varias semanas y se desvanece gradualmente.</li><li><strong>Variedad de Colores:</strong> Los tintes vegetales pueden ofrecer una variedad de colores naturales, desde tonos rojizos con la henna hasta tonos oscuros con el índigo. Sin embargo, su capacidad para aclarar el cabello es limitada.</li><li><strong>Mejora del Cuero Cabelludo:</strong> Algunos tintes vegetales tienen propiedades antimicrobianas y antiinflamatorias que pueden beneficiar el cuero cabelludo, reduciendo problemas como la caspa y la irritación.</li></ul>",
                ],
                references: [
                    '<li>Pandey, S., & Sharma, A. (2022). Indigo Dye for Hair: Properties and Applications. Retrieved from https://www.ncbi.nlm.nih.gov</li>',
                ]
            },
            {
                id: '33',
                color: '#49BBBD',
                title: '3.3. Tipos de Tintes Minerales',
                images: [
                    { src: '7-min.jpg' }
                ],
                content: [
                    "<p class='mb-6'>Los tintes minerales son una opción menos común pero interesante para colorear el cabello. Están compuestos de minerales naturales y no contienen los productos químicos agresivos que se encuentran en muchos tintes comerciales. A continuación, se describen algunos de los tintes minerales más utilizados:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Arcilla Bentonita:</strong> La arcilla bentonita es conocida por sus propiedades purificantes y desintoxicantes. Cuando se mezcla con agua, puede formar una pasta que no solo limpia el cabello, sino que también puede proporcionar un ligero tono marrón. Es más comúnmente utilizada como tratamiento para el cuero cabelludo y el cabello.</li><li><strong>Minerales de Henna:</strong> Aunque la henna es una planta, algunos productos combinan henna con minerales para alterar y mejorar los tonos del cabello. Por ejemplo, la henna mezclada con óxido de hierro puede producir tonos rojizos más intensos.</li><li><strong>Óxido de Hierro:</strong> El óxido de hierro se utiliza a menudo en cosméticos y productos para el cabello por su capacidad para proporcionar tonos rojos y marrones. Es un colorante mineral seguro y efectivo.</li><li><strong>Talco:</strong> El talco, aunque más conocido como un polvo absorbente, puede ser usado en combinación con otros minerales para proporcionar un efecto de color ligero y mate en el cabello. Se usa principalmente en productos de peinado en seco.</li><li><strong>Carbonato de Calcio:</strong> Este mineral se encuentra a menudo en tizas y otros productos de peinado temporales. Proporciona un color temporal que puede ser fácilmente lavado y es ideal para cambios de color no permanentes y efectos especiales.</li><li><strong>Mica:</strong> La mica es un mineral que se utiliza para proporcionar brillo y reflejos en el cabello. No altera significativamente el color del cabello, pero puede añadir un efecto luminoso y brillante.</li><li><strong>Caolín:</strong> El caolín, o arcilla blanca, se utiliza principalmente en productos para el cuero cabelludo y el cabello debido a sus propiedades absorbentes y calmantes. Puede proporcionar un ligero efecto de color blanquecino, pero su uso principal es como tratamiento de limpieza y acondicionamiento.</li></ul>",
                ],
                references: [
                    '<li>Green, J. (2023). Combining Henna with Minerals for Enhanced Hair Color. Retrieved from https://www.byrdie.com</li>',
                    '<li>Clark, A. (2023). Understanding Iron Oxide in Hair Products. Retrieved from https://www.cosmeticsdesign.com</li>',
                ]
            },
            {
                id: '34',
                color: '#F48C06',
                title: '3.4. Efectos de los Tintes Minerales',
                images: [
                    { src: '8-min.jpg' }
                ],
                content: [
                    "<p class='mb-6'>Los tintes minerales son una opción natural para colorear el cabello, y aunque no son tan comunes como los tintes vegetales o químicos, tienen efectos únicos y beneficios específicos. A continuación, se describen algunos de los principales efectos de los tintes minerales:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Colores Naturales:</strong> Los tintes minerales suelen proporcionar tonos más naturales y sutiles en comparación con los tintes químicos. Por ejemplo, el óxido de hierro puede proporcionar tonos rojizos y marrones, mientras que la mica puede añadir un brillo luminoso.</li><li><strong>Textura y Volumen:</strong> Algunos tintes minerales, como el caolín y la arcilla bentonita, pueden mejorar la textura y el volumen del cabello. Estos minerales ayudan a limpiar y desintoxicar el cuero cabelludo, lo que puede resultar en un cabello más saludable y con más cuerpo.</li><li><strong>Menor Daño:</strong> A diferencia de los tintes químicos, los tintes minerales no contienen amoníaco ni peróxido de hidrógeno, lo que significa que no causan daño a la estructura del cabello. Esto los hace una opción más segura para el cabello frágil o dañado.</li><li><strong>Propiedades Acondicionadoras:</strong> Muchos tintes minerales tienen propiedades acondicionadoras que pueden ayudar a mantener el cabello suave y manejable. Por ejemplo, la arcilla bentonita no solo tiñe el cabello, sino que también lo acondiciona y fortalece.</li><li><strong>Resultados Temporales:</strong> Los tintes minerales suelen ofrecer resultados temporales, lo que los hace ideales para quienes desean experimentar con el color del cabello sin un compromiso a largo plazo. Estos tintes se desvanecen gradualmente con el lavado.</li><li><strong>Seguridad y Compatibilidad:</strong> Los tintes minerales son generalmente seguros para todo tipo de cabello y cuero cabelludo, incluyendo aquellos sensibles o propensos a alergias. Sin embargo, siempre es recomendable realizar una prueba de alergia antes de usar cualquier nuevo producto.</li><li><strong>Beneficios para el Cuero Cabelludo:</strong> Algunos minerales, como el caolín y la arcilla bentonita, tienen propiedades purificantes y pueden ayudar a mantener el cuero cabelludo limpio y libre de impurezas. Esto puede reducir problemas como la caspa y la irritación.</li></ul>",
                ],
                references: [
                    '<li>Evans, K. (2023). Why Mineral Hair Dyes Are Less Damaging. Retrieved from https://www.cosmeticscience.com</li>',
                ]
            },
            {
                id: '35',
                color: '#49BBBD',
                title: '3.5. Principales Grupos de Tintes Sintéticos',
                content: [
                    "<p class='mb-6'>Los tintes sintéticos son productos químicos creados en laboratorio que se utilizan para colorear el cabello de manera efectiva y duradera. Estos tintes se dividen en varios grupos principales según su composición química y el tipo de reacción que producen en el cabello. A continuación, se describen los principales grupos de tintes sintéticos:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Tintes Permanentes:</strong> Estos tintes contienen amoníaco y peróxido de hidrógeno, que abren la cutícula del cabello y permiten que los pigmentos penetren en el córtex. Proporcionan un color duradero que solo se elimina con el crecimiento del cabello. Son ideales para cubrir canas y realizar cambios de color drásticos.</li><li><strong>Tintes Demi-Permanentes:</strong> Estos tintes contienen una menor cantidad de peróxido y no contienen amoníaco, lo que los hace menos agresivos que los tintes permanentes. Penetran parcialmente la cutícula del cabello y duran entre 6 a 8 semanas. Son ideales para añadir tono o realzar el color natural del cabello sin el compromiso a largo plazo de los tintes permanentes.</li><li><strong>Tintes Semi-Permanentes:</strong> No contienen amoníaco ni peróxido, lo que los hace menos dañinos para el cabello. Se depositan en la superficie del cabello y duran entre 4 a 6 semanas. Son adecuados para cambios de color temporales y para quienes buscan evitar el uso de productos químicos fuertes.</li><li><strong>Tintes Temporales:</strong> Estos tintes se adhieren a la superficie del cabello y se eliminan con uno o dos lavados. No penetran la cutícula del cabello y son ideales para ocasiones especiales o para probar un nuevo color sin compromiso.</li><li><strong>Tintes de Oxidación:</strong> Este grupo incluye tintes permanentes que requieren la mezcla de un agente oxidante (como el peróxido de hidrógeno) con el colorante. La oxidación permite que los pigmentos del colorante se fijen en el cabello, proporcionando un color duradero y resistente al lavado.</li></ul>",
                ]
            },
            {
                id: '36',
                value: '12',
                color: '#F48C06',
                title: '3.6. Clasificación de Tintes Sintéticos',
                content: [
                    "<p class='mb-6'>Los tintes sintéticos para el cabello se clasifican en varias categorías según su composición química y la duración del color en el cabello. Esta clasificación ayuda a los usuarios a elegir el tipo de tinte que mejor se adapte a sus necesidades y expectativas. A continuación, se presentan las principales clasificaciones de los tintes sintéticos:</p>",
                    "<ul class='mb-6 px-6'><li><strong>Tintes Permanentes:</strong><ul class='px-6'><li><strong>Descripción:</strong> Estos tintes contienen amoníaco y peróxido de hidrógeno, que permiten que los pigmentos penetren profundamente en el córtex del cabello.</li><li><strong>Duración:</strong> El color dura hasta que el cabello crece y se corta.</li><li><strong>Uso Común:</strong> Son ideales para cubrir canas y realizar cambios de color drásticos y duraderos.</li></ul></li><li><strong>Tintes Demi-Permanentes:</strong><ul class='px-6'><li><strong>Descripción:</strong> Contienen una menor cantidad de peróxido y no contienen amoníaco. Penetran parcialmente la cutícula del cabello.</li><li><strong>Duración:</strong> Duran entre 6 a 8 semanas.</li><li><strong>Uso Común:</strong> Son adecuados para realzar el color natural del cabello o añadir tonos sin compromiso a largo plazo.</li></ul></li><li><strong>Tintes Semi-Permanentes:</strong><ul class='px-6'><li><strong>Descripción:</strong> No contienen amoníaco ni peróxido. Se depositan en la superficie del cabello.</li><li><strong>Duración:</strong> Duran entre 4 a 6 semanas.</li><li><strong>Uso Común:</strong> Son ideales para cambios de color temporales y para quienes desean evitar productos químicos fuertes.</li></ul></li><li><strong>Tintes Temporales:</strong><ul class='px-6'><li><strong>Descripción:</strong> Se adhieren a la superficie del cabello y se eliminan con uno o dos lavados.</li><li><strong>Duración:</strong> El color se elimina con el primer o segundo lavado.</li><li><strong>Uso Común:</strong> Son ideales para ocasiones especiales o para probar un nuevo color sin compromiso.</li></ul></li><li><strong>Tintes de Oxidación:</strong><ul class='px-6'><li><strong>Descripción:</strong> Requieren la mezcla de un agente oxidante (como el peróxido de hidrógeno) con el colorante.</li><li><strong>Duración:</strong> Proporcionan un color duradero y resistente al lavado.</li><li><strong>Uso Común:</strong> Son utilizados para obtener colores intensos y duraderos.</li></ul></li></ul>",
                ] 
            }
        ]
    }
];
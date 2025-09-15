import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Bahasa Indonesia Dulu",
    Svg: require("@site/static/img/indonesia.svg").default,
    description: (
      <>
        Web ini mendukung bahasa Indonesia sebagai bahasa utama untuk kalian
        yang tidak fasih berbahasa inggris.
      </>
    ),
  },
  {
    title: "Dark Mode Support",
    Svg: require("@site/static/img/moon.svg").default,
    description: (
      <>
        Buat kalian yang suka belajar sampai tengah malam, web ini didukung
        dengan fitur dark mode agar mata kalian tidak lelah pada saat belajar.
      </>
    ),
  },
  {
    title: "Gratis",
    Svg: require("@site/static/img/money.svg").default,
    description: (
      <>
        Kami mempercayai bahwa pendidikan harus bersifat gratis. Maka dari itu
        kami membuat web ini dengan misi memberikan edukasi gratis kepada
        seluruh pelajar.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

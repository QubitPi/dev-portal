import { ReactElement } from 'react'
import { useCurrentProduct } from 'contexts'
import CardLink from 'components/card-link'
import Heading from 'components/heading'
import Text from 'components/text'
import s from './official-releases-section.module.css'

const OfficialReleasesSection = (): ReactElement => {
  const currentProduct = useCurrentProduct()

  return (
    <div className={s.root}>
      <Heading
        className={s.sectionHeading}
        level={2}
        size={300}
        slug="looking-for-more"
        weight="bold"
      >
        Looking for more?
      </Heading>
      <CardLink href={`https://releases.hashicorp.com/${currentProduct.slug}`}>
        <Text className={s.cardTitle} size={300} weight="semibold">
          Official releases
        </Text>
        <Text className={s.cardBody} size={200}>
          All officially supported HashiCorp release channels and their security
          guarantees.
        </Text>
      </CardLink>
    </div>
  )
}

export default OfficialReleasesSection

import ImageCard from "@/components/shared/Cards/common/ImageCard"
import PageHeader from "@/components/shared/Headers/PageHeader"

const Saved = () => {
  return (
    <div>
      <PageHeader
        title="Saved Posts"
        headerIconUrl="/assets/icons/save.svg"
      />
      <div className="w-full flex flex-row flex-wrap gap-4 mt-10 max-sm:gap-2">
        <ImageCard imageURL="https://cloud.appwrite.io/v1/storage/buckets/658c3de94976f7c92ac7/files/65b0517a236d48c07ecc/view?project=65761745e4ab0c50dc23&mode=admin" />
      </div>
    </div>
  )
}

export default Saved

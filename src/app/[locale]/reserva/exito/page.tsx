import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function ExitoPage() {
  const t = await getTranslations("SuccessPage");

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-lg w-full text-center">
        <div className="text-7xl mb-6">✅</div>
        <h1 className="font-display text-3xl font-bold text-text-dark mb-4">
          {t("title")}
        </h1>
        <p className="text-text-muted text-lg mb-6">
          {t("description")}
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-3.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary-light transition-all duration-300"
          >
            {t("backHome")}
          </Link>
          <p className="text-text-muted text-xs">
            {t("cancellation")}
          </p>
        </div>
      </div>
    </div>
  );
}

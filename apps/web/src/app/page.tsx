"use client";

import { Button } from "@/core/components/shadcn/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card/card";

import { useState } from "react";
import {
  FaApple,
  FaCar,
  FaCheck,
  FaGoogle,
  FaRocket,
  FaShieldAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* هدر با دکمه‌ها */}
      <div className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
        <div className="pages-container py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaCar className="text-primary text-2xl" />
              <span className="text-xl font-extralight text-foreground">
                درایورهاب
              </span>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm">
                <FaUser />
                ورود
              </Button>
              <Button size="sm">
                <FaRocket />
                ثبت‌نام
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pages-container py-8">
        {/* عنوان اصلی */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            تست کامپوننت{" "}
            <span className="text-primary">دکمه‌های علی‌بابایی</span>
          </h1>
          <p className="text-text-light text-lg">
            انواع دکمه‌ها با انیمیشن‌های نرم و زیبا
          </p>
        </div>

        {/* بخش اول: انواع دکمه‌ها */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>انواع دکمه‌ها</CardTitle>
            <CardDescription>
              6 نوع دکمه مختلف با استایل‌های متفاوت
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="default" size="default">
                دکمه اصلی (زرد)
              </Button>
              <Button variant="secondary" size="default">
                دکمه آبی نفتی
              </Button>
              <Button variant="outline" size="default">
                دکمه خطی
              </Button>
              <Button variant="destructive" size="default">
                دکمه حذف
              </Button>
              <Button variant="ghost" size="default">
                دکمه شیشه‌ای
              </Button>
              <Button variant="link" size="default">
                دکمه لینکی
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* بخش دوم: سایزهای مختلف */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>سایزهای مختلف</CardTitle>
            <CardDescription>
              از کوچک تا بزرگ - هر سایز برای کاربری خاص
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">دکمه کوچک</Button>
              <Button size="default">دکمه معمولی</Button>
              <Button size="lg">دکمه بزرگ</Button>
              <Button size="icon" variant="default">
                <FaCheck />
              </Button>
              <Button size="icon-sm" variant="secondary">
                <FaUser />
              </Button>
              <Button size="icon-lg" variant="outline">
                <FaShoppingCart />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* بخش سوم: دکمه‌های با آیکون */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>دکمه‌های با آیکون</CardTitle>
            <CardDescription>
              تجربه کاربری بهتر با آیکون‌های معنادار
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>
                <FaShoppingCart />
                خرید
              </Button>
              <Button variant="secondary">
                <FaUser />
                پروفایل
              </Button>
              <Button variant="outline">
                <FaGoogle />
                ورود با گوگل
              </Button>
              <Button variant="ghost">
                <FaApple />
                اپل
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* بخش چهارم: دکمه لودینگ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>دکمه در حال بارگذاری</CardTitle>
            <CardDescription>
              وضعیت لودینگ برای عملیات‌های async
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button onClick={handleClick} disabled={loading}>
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    در حال ارسال...
                  </>
                ) : (
                  <>
                    <FaRocket />
                    کلیک کن!
                  </>
                )}
              </Button>
              <Button variant="secondary" disabled>
                <FaShieldAlt />
                دکمه غیرفعال
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* بخش پنجم: کارت‌های تعاملی */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <FaCar className="text-primary text-3xl" />
                </div>
              </div>
              <CardTitle>خدمات رانندگان</CardTitle>
              <CardDescription>ثبت‌نام و مدیریت</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="w-full">
                مشاهده بیشتر
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/10 p-4 rounded-full">
                  <FaShieldAlt className="text-secondary text-3xl" />
                </div>
              </div>
              <CardTitle>بیمه مسافر</CardTitle>
              <CardDescription>امنیت سفر شما</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm" className="w-full">
                اطلاعات بیشتر
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-accent/40 p-4 rounded-full">
                  <FaUser className="text-primary text-3xl" />
                </div>
              </div>
              <CardTitle>حساب کاربری</CardTitle>
              <CardDescription>ورود و ثبت‌نام</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  ورود
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  ثبت‌نام
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* فوتر با دکمه مهاجرت */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-light mb-4">
            آماده شروع پروژه درایورهاب هستی؟
          </p>
          <Button size="lg" className="gap-3">
            شروع کن
            <FaRocket className="text-lg" />
          </Button>
        </div>
      </div>
    </div>
  );
}

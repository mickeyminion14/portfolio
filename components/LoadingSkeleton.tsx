"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="h-20 w-3/4 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
        <div className="h-10 w-1/2 mx-auto bg-muted animate-pulse rounded-lg mb-6" />
        <div className="h-6 w-2/3 mx-auto bg-muted animate-pulse rounded-lg mb-8" />
        <div className="flex justify-center gap-4 mb-12">
          <div className="h-12 w-40 bg-muted animate-pulse rounded-lg" />
          <div className="h-12 w-40 bg-muted animate-pulse rounded-lg" />
        </div>
        <div className="flex justify-center gap-4">
          <div className="h-12 w-12 bg-muted animate-pulse rounded-full" />
          <div className="h-12 w-12 bg-muted animate-pulse rounded-full" />
          <div className="h-12 w-12 bg-muted animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="h-12 w-64 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
        <div className="h-6 w-96 mx-auto bg-muted animate-pulse rounded-lg mb-16" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="h-full">
              <CardHeader>
                <div className="h-16 w-16 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
                <div className="h-6 w-3/4 bg-muted animate-pulse rounded-lg" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-4 bg-muted animate-pulse rounded" />
                  <div className="h-4 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="h-6 w-16 bg-muted animate-pulse rounded-full" />
                    <div className="h-6 w-20 bg-muted animate-pulse rounded-full" />
                    <div className="h-6 w-16 bg-muted animate-pulse rounded-full" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-9 flex-1 bg-muted animate-pulse rounded" />
                    <div className="h-9 flex-1 bg-muted animate-pulse rounded" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStackSkeleton() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="h-12 w-64 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
        <div className="h-6 w-96 mx-auto bg-muted animate-pulse rounded-lg mb-16" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="h-full">
              <CardContent className="p-6">
                <div className="h-8 w-32 mx-auto bg-muted animate-pulse rounded-lg mb-6" />
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, j) => (
                    <div key={j} className="flex flex-col items-center gap-2">
                      <div className="h-10 w-10 bg-muted animate-pulse rounded-lg" />
                      <div className="h-3 w-16 bg-muted animate-pulse rounded" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="h-12 w-64 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
        <div className="h-6 w-96 mx-auto bg-muted animate-pulse rounded-lg mb-16" />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
                  <div className="h-5 w-20 mx-auto bg-muted animate-pulse rounded mb-2" />
                  <div className="h-4 w-32 mx-auto bg-muted animate-pulse rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="h-8 w-48 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
              <div className="h-4 w-64 mx-auto bg-muted animate-pulse rounded mb-8" />
              <div className="flex justify-center gap-4 mb-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-16 w-16 bg-muted animate-pulse rounded-full" />
                ))}
              </div>
              <div className="h-12 w-48 mx-auto bg-muted animate-pulse rounded-lg" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


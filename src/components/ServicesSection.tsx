'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data";


export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Legal Learning Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training services tailored for legal professionals, students, and organizations
          </p>
          
          {/* Service categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            <Button 
              variant={activeService === null ? "default" : "outline"} 
              onClick={() => setActiveService(null)}
              className="btn-hover-scale"
            >
              All Services
            </Button>
            {services.map((service, index) => (
              <Button 
                key={service.title} 
                variant={activeService === index ? "default" : "outline"}
                onClick={() => setActiveService(index)}
                className="btn-hover-scale"
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services
            .filter((_, index) => activeService === null || activeService === index)
            .map((service, index) => (
              <Card key={service.title} className="border-none shadow-lg overflow-hidden group card-hover">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">{service.stats}</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <service.icon className="h-10 w-10 text-primary mb-2" />
                    <span className="bg-primary/10 text-primary font-medium rounded-full px-3 py-1 text-sm">
                      {service.metric}
                    </span>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.subfeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 btn-hover-scale">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
        
        {/* Success metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">10k+</div>
            <div className="text-sm text-muted-foreground">Students Trained</div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">450+</div>
            <div className="text-sm text-muted-foreground">Courses Available</div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
